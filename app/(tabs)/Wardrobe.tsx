import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Image, View, StyleSheet, FlatList } from 'react-native';
import ImageGridModal from '@/components/ImageGridModal';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FirebaseError } from 'firebase/app';
import { getUserImagesRef } from '@/services/firebaseconfig';
import CreateOutfitModal from '@/components/CreateOutfitModal';
const categories = ['tops', 'outerwear', 'shoes', 'dresses'];
import WardrobeStats from '@/components/WardrobeStats';

const TabOneScreen = () => {
  const [imageGridVisible, setImageGridVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [categoryPreviews, setCategoryPreviews] = useState([]);
  const [createOutfitVisible, setCreateOutfitVisible] = useState(false);

  useEffect(() => {
    const fetchPreviewImages = async () => {
      const userImagesRef = getUserImagesRef();
      if (!userImagesRef) {
        console.error("Failed to get user images reference");
        return;
      }

      const previews = await Promise.all(categories.map(async category => {
        const categoryRef = ref(userImagesRef, `clothes/${category}`);
        const response = await listAll(categoryRef);
        if (response.items.length > 0) {
          const url = await getDownloadURL(response.items[0]);
          return { category, previewImage: url };
        }
        return { category, previewImage: null };
      }));
      setCategoryPreviews(previews);
    };

    fetchPreviewImages();
  }, []);

  const handleCategorySelect = async (category) => {
    try {
      const userImagesRef = getUserImagesRef();
      if (!userImagesRef) {
        throw new Error("Failed to get user images reference");
      }
      const categoryRef = ref(userImagesRef, `clothes/${category}`);

      const response = await listAll(categoryRef);
      const urls = await Promise.all(response.items.map(itemRef => getDownloadURL(itemRef)));
      setSelectedImages(urls);
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

  const handleOutfitsFetch = async () => {
    handleCategorySelect('outfits');
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect(item.category)}>
      <Text style={styles.categoryText}>{item.category}</Text>
      {item.previewImage && <Image style={styles.imagePreview} source={{ uri: item.previewImage }} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
       <WardrobeStats />
      <FlatList
        data={categoryPreviews}
        renderItem={renderCategory}
        keyExtractor={(item) => item.category}
      />
      <TouchableOpacity style={styles.specialButton} onPress={handleOutfitsFetch}>
        <Text style={styles.buttonText}>View Outfits</Text>
      </TouchableOpacity>
      <ImageGridModal
        visible={imageGridVisible}
        onClose={() => setImageGridVisible(false)}
        images={selectedImages}
      />
      <TouchableOpacity style={styles.specialButton} onPress={() => setCreateOutfitVisible(true)}>
        <Text style={styles.buttonText}>Create an Outfit</Text>
      </TouchableOpacity>
      <CreateOutfitModal
        visible={createOutfitVisible}
        onClose={() => setCreateOutfitVisible(false)}
        categories={['tops', 'outerwear', 'shoes', 'dresses']}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryButton: {
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imagePreview: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  specialButton: {
    padding: 15,
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default TabOneScreen;
