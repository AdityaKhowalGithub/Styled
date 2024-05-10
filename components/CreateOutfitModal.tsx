import React, { useState, useEffect, useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import { ref as storageRef, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
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
  const outfitPreviewRef = useRef<View>(null);

  useEffect(() => {
    categories.forEach(category => {
      fetchImagesForCategory(category);
    });
  }, [visible]);

  const fetchImagesForCategory = async (category: string) => {
    try {
      const userImagesRef = getUserImagesRef();
      const categoryRef = storageRef(userImagesRef, `clothes/${category}`);
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
    setSelections(prev => {
        // Check if the current image is already selected
        if (prev[category] === url) {
            // Remove the image from the selection if it is already selected
            const updatedSelections = { ...prev };
            delete updatedSelections[category];
            return updatedSelections;
        } else {
            // Otherwise, add the new selection
            return { ...prev, [category]: url };
        }
    });
};

  const handleSaveOutfit = async () => {
    if (outfitPreviewRef.current) {
      const uri = await captureRef(outfitPreviewRef.current, {
        format: 'jpg',
        quality: 0.8,
      });

      const blob = await (await fetch(uri)).blob();
      const userImagesRef = getUserImagesRef();
      const outfitRef = storageRef(userImagesRef, `clothes/outfits/${Date.now()}.jpg`);

      uploadBytes(outfitRef, blob).then(snapshot => {
        getDownloadURL(snapshot.ref).then(url => {
          console.log('Saved outfit URL:', url);
          onClose();  // Close modal after saving
        });
      }).catch(error => {
        console.error('Upload error:', error);
      });
    }
  };

  const renderCategoryItems = (category: string) => ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => handleSelectItem(category, item)}>
      <Image source={{ uri: item }} style={styles.imageThumbnail} />
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide" transparent={false}>
      <ScrollView style={styles.scrollView}>
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
          <View ref={outfitPreviewRef} style={styles.outfitPreview}>
            {['shoes', 'tops', 'dresses', 'outerwear'].map((category, index) => (
              selections[category] && (
                <Image key={category} source={{ uri: selections[category] }} style={[styles.imagePreview, { zIndex: categories.length - index }]} />
              )
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSaveOutfit}>
            <Text style={styles.buttonText}>Save Outfit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 30,
    flex: 1,
  },
  modalView: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  outfitPreview: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
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
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  imagePreview: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
});

export default CreateOutfitModal;
