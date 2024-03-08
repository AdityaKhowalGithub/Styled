import React from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";

// Define interfaces for your props and items
interface WardrobeItem {
  name: string;
  image: keyof typeof IMAGES | string; // using keyof typeof IMAGES assumes exact keys match, string gives flexibility
}

interface ScrollableGridProps {
  items: WardrobeItem[];
}

const IMAGES = {
  Rectangle1: require("@/assets/images/Rectangle1.png"),
  Rectangle2: require("@/assets/images/Rectangle2.png"),
  Rectangle3: require("@/assets/images/Rectangle3.png"),
};

const renderItem = (item: WardrobeItem) => {
  // Assuming item.image directly corresponds to the keys in IMAGES
  // You might need to transform item.image to match the exact keys if necessary
  const imageKey = item.image
    .replace("@/assets/images/", "")
    .replace(".png", "") as keyof typeof IMAGES;

  const imageSource = IMAGES[imageKey];

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      {imageSource && <Image source={imageSource} style={styles.itemImage} />}
    </View>
  );
};

const ScrollableGrid: React.FC<ScrollableGridProps> = ({ items }) => {
  return (
    <View style={styles.outerStyle}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {items.map((item) => renderItem(item))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  outerStyle: {
    marginBottom: 8,
    marginHorizontal: 18,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  itemContainer: {
    width: 107,
    height: 140,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
  },
  itemText: {
    textAlign: "center",
  },
});

// Correct way to export the component
export default ScrollableGrid;
