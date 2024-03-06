import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ImageStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Define interfaces for your props and items
interface WardrobeItem {
  name: string;
  image: keyof typeof IMAGES | string; // using keyof typeof IMAGES assumes exact keys match, string gives flexibility
}

interface MyModalProps {
  visible: boolean;
  onClose: () => void;
  items: WardrobeItem[];
}

const IMAGES = {
  Rectangle1: require("@/assets/images/Rectangle1.png"),
  Rectangle2: require("@/assets/images/Rectangle2.png"),
  Rectangle3: require("@/assets/images/Rectangle3.png"),
};

const MyModal: React.FC<MyModalProps> = ({ visible, onClose, items }) => {
  const renderItem = ({ item }: { item: WardrobeItem }) => {
    // Assuming item.image directly corresponds to the keys in IMAGES
    // You might need to transform item.image to match the exact keys if necessary
    const imageKey = item.image
      .replace("@/assets/images/", "")
      .replace(".png", "") as keyof typeof IMAGES;
    const imageSource = IMAGES[imageKey];

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        {imageSource && (
          <Image source={imageSource} style={styles.itemImage as ImageStyle} />
        )}
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
      style={{ flex: 1 }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.name.toString()}
            numColumns={3}
            contentContainerStyle={styles.grid}
          />
        </View>
      </View>
    </Modal>
  );
};

// Define your styles here
const styles = StyleSheet.create({
  // Previous styles go here
  itemImage: {
    width: 100, // Adjust as needed
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "100%", // Full width
    height: "100%", // Full height
    backgroundColor: "white",

    padding: 20, // Adjust padding as needed, maybe less than 35 to use space more efficiently
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  grid: {
    marginBottom: 10,
    marginTop: 50, // Adjust as needed
    width: "100 %", // Adjust the width as per your item content
    borderColor: "#ccc",
    borderWidth: 1,

    marginRight: 8,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
    height: 100, // Adjust the height as per your item content
    borderRadius: 8,
  },
  itemText: {
    textAlign: "center",
  },
  button: {
    borderRadius: 4,
    padding: 5,
    elevation: 2,
    marginTop: 50,
    marginRight: 300,
  },
  buttonClose: {
    backgroundColor: "#D7C0AE",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  // Add other styles as needed
});

export default MyModal;
