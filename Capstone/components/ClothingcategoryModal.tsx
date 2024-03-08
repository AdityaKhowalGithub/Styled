import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ScrollableGrid from "./ScrollableGrid";

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
  return (
    <Modal
      visible={visible}
      transparent={false}
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
          <ScrollableGrid items={items} />
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
  // Add other styles as needed
});

export default MyModal;
