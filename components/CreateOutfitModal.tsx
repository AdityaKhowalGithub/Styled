import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { FirebaseError } from 'firebase/app';
import { getUserImagesRef } from '@/services/firebaseconfig';

interface CreateOutfitModalProps {
  visible: boolean;
  onClose: () => void;
  categories: string[];
}

const CreateOutfitModal: React.FC<CreateOutfitModalProps> = ({ visible, onClose, categories }) => {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [categoryImages, setCategoryImages] = useState<Record<string, string[]>>({});

  useEffect(() => {
    categories.forEach(category => {
      fetchImagesForCategory(category);
    });
  }, [visible]);  // Assuming you want to refetch when the modal becomes visible

  const fetchImagesForCategory = async (category: string) => {
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

  const handleSelectItem = (category: string, url: string) => {
    setSelections(prev => ({ ...prev, [category]: url }));
  };

  const renderCategoryItems = (category: string) => ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => handleSelectItem(category, item)}>
      <Image source={{ uri: item }} style={styles.imageThumbnail} />
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide" transparent={false}>
      <View style={styles.modalView}>
        {categories.map(category => (
          <View key={category}>
            <Text style={styles.header}>{category.toUpperCase()}</Text>
            <FlatList
              data={categoryImages[category]}
              renderItem={renderCategoryItems(category)}
              keyExtractor={(item, idx) => `${category}-${idx}`}
              horizontal
            />
          </View>
        ))}
        <View style={styles.outfitPreview}>
          {['shoes', 'tops', 'dresses', 'outerwear'].map((category, index) => (
            selections[category] && (
              <Image key={category} source={{ uri: selections[category] }} style={[styles.imagePreview, { zIndex: categories.length - index }]} />
            )
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 50,
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
    textAlign: 'center'
  },
  outfitPreview: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 100,
    height: 300,
  },
  imagePreview: {
    position: 'absolute',
    width: 100,
    height: 100,
    resizeMode: 'cover',
  }
});

export default CreateOutfitModal;
