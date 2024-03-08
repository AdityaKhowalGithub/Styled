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
import wardrobeCategories from '../assets/wardrobeItems.json';
import { AntDesign } from "@expo/vector-icons";
import IMAGES from "@/components/IMAGES";
interface WardrobeModalProps {
  visible: boolean;
  onClose: () => void;
  wardrobeItems: any[]; // Specify a more specific type if possible
  navigation: any; // Specify a more specific type if possible, e.g., NavigationType from react-navigation if you're using it
}

const WardrobeModal: React.FC<WardrobeModalProps> = ({ visible, onClose, wardrobeItems, navigation }) => {
  const [activeSection, setActiveSection] = useState("clothes"); // 'clothes' or 'outfits'
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ['All Clothes', 'Dresses', 'Tops', 'Outerwear', 'Bottoms', 'Activewear', 'Shoes'];
  
 
  const renderCategories = () => {
    return (
      <ScrollView contentContainerStyle={styles.grid}>
        {categories.map((categoryName, index) => {
          const categoryItems = wardrobeCategories['clothes'][categoryName] || [];
          const exampleImages = categoryItems.length ? categoryItems.slice(0, 3).map(item => IMAGES[item.name as keyof typeof IMAGES]) : [];
  
          return (
            <TouchableOpacity
              key={index}
              style={styles.gridItem}
              onPress={() => setSelectedCategory(categoryName)}
            >
              <View style={styles.imageStack}>
                {exampleImages.map((src, idx) => (
                  <Image
                    key={idx}
                    source={src}
                    style={[
                      styles.stackItemImage,
                      {
                        // Create a stepped effect for each image
                        // top: idx * 10, // Each image is offset vertically by 10 units more than the previous image
                        left: idx * 20, // Each image is offset horizontally by 10 units more than the previous image
                        zIndex: exampleImages.length - idx,
                      },
                    ]}
                  />
                ))}
              </View>
              <Text style={styles.gridItemText}>{categoryName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };
  
  
  
  const renderCategoryItems = () => {
    if (!selectedCategory) return null;
    const items = wardrobeCategories['clothes'][selectedCategory as keyof typeof wardrobeCategories['clothes']];
    if (!items) {
      return <Text>No items found in this category</Text>;
    }
   

    return (
      <ScrollView contentContainerStyle={styles.grid}>
        {items.map((item, index) => {
        return(
          
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            // Implement navigation or other logic here
          >
            <Image
              source={IMAGES[item.name as keyof typeof IMAGES]} // Add index signature to IMAGES object
              style={styles.itemImage} // Ensure you have a style for the image
            />
            <Text >{item.name}</Text>
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
        <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={()=>{
              if (selectedCategory){
                setSelectedCategory(null);
              }else{
                onClose();
              }
            }}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setActiveSection("clothes")}>
              <Text
                style={
                  activeSection === "clothes"
                    ? styles.activeSection
                    : styles.inactiveSection
                }
              >
                Clothes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveSection("outfits")}>
              <Text
                style={
                  activeSection === "outfits"
                    ? styles.activeSection
                    : styles.inactiveSection
                }
              >
                Outfits
              </Text>
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
    position: 'relative', // Use relative positioning for the container
  },
  stackItemImage: {
    width: '100%', // Images will fill the width of their container
    height: '100%', // Images will fill the height of their container
    position: 'absolute', // Absolute positioning to overlay images
    resizeMode: 'contain', // Maintain aspect ratio
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
  
});
export default WardrobeModal;
