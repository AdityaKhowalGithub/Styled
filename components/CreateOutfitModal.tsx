import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { ref, getDownloadURL } from 'firebase/storage';
import { FirebaseError } from 'firebase/app';
import { getUserImagesRef } from '@/services/firebaseconfig';

const CreateOutfitModal = ({ visible, onClose, categories }) => {
  const [selections, setSelections] = useState({});
  const [categoryImages, setCategoryImages] = useState({});

  const fetchImagesForCategory = async (category) => {
    try {
      const userImagesRef = getUserImagesRef();
      const categoryRef = ref(userImagesRef, `clothes/${category}`);
      const response = await listAll(categoryRef);
      const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
      setCategoryImages(prev => ({ ...prev, [category]: urls }));
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("Firebase Error:", error.message);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const handleSelectItem = (category, url) => {
    setSelections(prev => ({ ...prev, [category]: url }));
  };

  const renderCategoryItems = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleSelectItem(currentCategory, item)}>
      <Image source={{ uri: item }} style={styles.imageThumbnail} />
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide" transparent={false}>
      <View style={styles.modalView}>
        {categories.map(category => (
          <View key={category}>
            <Text style={styles.header}>{category.toUpperCase()}</Text>
            <TouchableOpacity onPress={() => fetchImagesForCategory(category)}>
              <Text>Load {category}</Text>
            </TouchableOpacity>
            <FlatList
              data={categoryImages[category]}
              renderItem={renderCategoryItems}
              keyExtractor={(item, idx) => idx.toString()}
              horizontal
            />
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 50,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageThumbnail: {
    width: 100,
    height: 100,
    margin: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default CreateOutfitModal;
