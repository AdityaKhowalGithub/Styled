import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import wardrobeCategories from '../assets/wardrobeItems.json';

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
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.gridItemText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderCategoryItems = () => {
    if (!selectedCategory) return null;
    const items = wardrobeCategories['clothes'][selectedCategory];
    if (!items) {
      return <Text>No items found in this category</Text>;
    }

    return (
      <ScrollView contentContainerStyle={styles.grid}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            // Implement navigation or other logic here
          >
            <Text style={styles.gridItemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
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

          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setSelectedCategory(null)}
          >
            <Text style={styles.textStyle}>Back to Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
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
    margin: 20,
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
    margin: 10,
    backgroundColor: "#f9f9f9", // Light background for each grid item
    borderRadius: 10, // Rounded corners for grid items
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20, // Space above the close button
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WardrobeModal;