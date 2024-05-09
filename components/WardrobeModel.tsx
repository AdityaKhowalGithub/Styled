import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FirebaseError } from 'firebase/app';
import ImageGridModal from '@/components/ImageGridModal'; // Assuming this is correct
import {getUserImagesRef} from '@/services/firebaseconfig';

interface WardrobeModalProps {
  visible: boolean;
  onClose: () => void;
  userID: string; // Ensure this is correctly passed from the parent component
}

const categories = ['tops', 'outerwear', 'shoes', 'dresses'];

const WardrobeModal: React.FC<WardrobeModalProps> = ({ visible, onClose, userID }) => {
  const [imageGridVisible, setImageGridVisible] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleCategorySelect = async (category: string) => {
    try {
      const userImagesRef = getUserImagesRef();
      if (!userImagesRef) {
        throw new Error("Failed to get user images reference");
      }
      const categoryRef = ref(userImagesRef, `clothes/${category}`);

      const res = await listAll(categoryRef);
      const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
      setImages(urls);
      setImageGridVisible(true);
    } catch (error) {
        if (error instanceof FirebaseError) {
          console.error("Firebase Error Code:", error.code);
          console.error("Firebase Error Message:", error.message);
        } else {
          console.error("General Error:", error);
        }
      }
      
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="fullScreen"
    >
      <View style={styles.fullScreenView}>
        <Text style={styles.modalText}>My Wardrobe</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect(item)}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
        <ImageGridModal
          visible={imageGridVisible}
          onClose={() => setImageGridVisible(false)}
          images={images}
        />
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
    backgroundColor: 'white'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 24
  },
  categoryButton: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#2196F3',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default WardrobeModal;
