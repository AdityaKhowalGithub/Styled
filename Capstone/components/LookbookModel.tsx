import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import wardrobeCategories from "../assets/wardrobeItems.json";
import { AntDesign } from "@expo/vector-icons";
interface WardrobeModalProps {
  visible: boolean;
  onClose: () => void;
  wardrobeItems: any[]; // Specify a more specific type if possible
  navigation: any; // Specify a more specific type if possible, e.g., NavigationType from react-navigation if you're using it
}
import IMAGES from "@/components/IMAGES";

const LookbookModal: React.FC<WardrobeModalProps> = ({
  visible,
  onClose,
  wardrobeItems,
  navigation,
}) => {
  const [activeSection, setActiveSection] = useState("clothes"); // 'clothes' or 'outfits'
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lookbookSelected, setLookbookSelected] = useState(false);
  const renderCategories = () => {
    const categories = Object.values(wardrobeCategories["lookbooks"]);
    // console.log(categories);
    return (
      <ScrollView contentContainerStyle={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => {
              setSelectedCategory(category.name);
              setLookbookSelected(true);
            }}
          >
            <Image source={IMAGES[category.name]} style={styles.itemImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderCategoryItems = () => {
    if (!selectedCategory) return null;
    if (!wardrobeCategories["lookbookinspo"]) {
      return <Text>'lookbooksinspo' category not found</Text>;
    }
    const items = wardrobeCategories["lookbookinspo"][selectedCategory];
    if (!items) {
      return (
        <ScrollView contentContainerStyle={styles.grid}>
          <Text>No items found in this category</Text>
        </ScrollView>
      );
    }
    console.log("e");
    console.log(items);
    return (
      <ScrollView contentContainerStyle={styles.grid}>
        {items.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.gridItem}
              // Implement navigation or other logic here
            >
              <Image
                source={IMAGES[item.name]} // Add index signature to IMAGES object
                style={styles.itemImage} // Ensure you have a style for the image
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {selectedCategory && (
            <Image
              source={IMAGES[selectedCategory]}
              style={styles.headerImage}
            />
          )}
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              if (selectedCategory) {
                setSelectedCategory(null);
                setLookbookSelected(false);
              } else {
                onClose();
              }
            }}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setActiveSection("clothes")}>
              {!selectedCategory && (
                <Text
                  style={
                    activeSection === "clothes"
                      ? styles.activeSection
                      : styles.inactiveSection
                  }
                >
                  My Lookbooks
                </Text>
              )}
              {selectedCategory && (
                <Text style={styles.inspoText}>{selectedCategory}</Text>
              )}
            </TouchableOpacity>
          </View>

          {selectedCategory ? renderCategoryItems() : renderCategories()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Ensure the header spans the entire width of the modal
    marginBottom: 20, // Space below the header
  },
  activeSection: {
    fontWeight: "bold",
    fontSize: 16,
  },
  inspoText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 70,
  },
  inactiveSection: {
    color: "#ccc",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    // backgroundColor: "#f9f9f9", // Light background for each grid item
    borderRadius: 10, // Rounded corners for grid items
  },
  // buttonClose: {
  //   backgroundColor: "#2196F3",
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  //   marginTop: 20, // Space above the close button
  // },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  itemImage: {
    width: 100, // Adjust as needed
    height: 100,
    borderRadius: 10, // Optional: for rounded corners
    marginBottom: 5,
  },
  imageStack: {
    width: 120, // Increase the width to accommodate the staggered images
    height: 100, // Keep the height the same
    position: "relative", // Use relative positioning for the container
  },
  stackItemImage: {
    width: "100%", // Images will fill the width of their container
    height: "100%", // Images will fill the height of their container
    position: "absolute", // Absolute positioning to overlay images
    resizeMode: "contain", // Maintain aspect ratio
    // Remove any borderRadius if you don't want rounded corners on the images
  },
  button: {
    width: "100%",
    borderRadius: 4,
    padding: 3,
    elevation: 2,
    marginTop: 50,
    marginRight: 300,
    marginBottom: 20,
  },
  buttonClose: {
    backgroundColor: "#D7C0AE",
  },
  headerImage: {
    // width: 600,
    // height: 200, // Adjust height as necessary
    // marginBottom: 10,
    // resizeMode: "cover",
    // marginTop: 100,
    // //keep the image in the same place but move it down

    width: 450,
    height: 210,
    marginBottom: 10,
    resizeMode: "cover",
    position: "absolute", // Position the image absolutely
    top: "10%", // Pushes the image content down by half of its height
    left: "80%", // Centers the image horizontally
    transform: [
      { translateY: -100 }, // Moves the image content up by half of its height value
      { translateX: -300 }, // Moves the image content left by half of its width value
    ],
  },
});
export default LookbookModal;
