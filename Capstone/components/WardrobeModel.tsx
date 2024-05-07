import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

interface WardrobeModalProps {
  visible: boolean;
  onClose: () => void;
  wardrobeItems: {
    clothes: Array<{ name: string }>;
    outfits: Array<{ name: string }>;
  };
}

const WardrobeModal: React.FC<WardrobeModalProps> = ({ visible, onClose, wardrobeItems }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false} // Make it non-transparent
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="fullScreen" // Use full screen modal presentation
    >
      <View style={styles.fullScreenView}>
        <Text style={styles.modalText}>My Wardrobe</Text>
        <FlatList
          data={[...wardrobeItems.clothes, ...wardrobeItems.outfits]}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.name + index}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onClose}
        >
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fullScreenView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white' // Ensure the background is white to cover the entire screen
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 24 // Increased font size for better visibility
  },
  itemContainer: {
    padding: 10,
    marginVertical: 4,
    alignItems: 'center',
    width: '100%' // Ensure item containers are full width
  },
  itemText: {
    fontSize: 16
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 20 // Added some margin at the top for spacing
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default WardrobeModal;
