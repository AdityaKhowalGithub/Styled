import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Image, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageGridModal from '@/components/ImageGridModal';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FirebaseError } from 'firebase/app';
import { getUserImagesRef } from '@/services/firebaseconfig';  // Assuming this is similar to the method in WardrobeModal

const categories = ['tops', 'outerwear', 'shoes', 'dresses'];

const TabOneScreen = () => {
  const [imageGridVisible, setImageGridVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [categoryPreviews, setCategoryPreviews] = useState([]);

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

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategorySelect(item.category)}>
      <Text style={styles.categoryText}>{item.category}</Text>
      {item.previewImage && <Image style={styles.imagePreview} source={{ uri: item.previewImage }} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categoryPreviews}
        renderItem={renderCategory}
        keyExtractor={(item) => item.category}
      />
      <ImageGridModal
        visible={imageGridVisible}
        onClose={() => setImageGridVisible(false)}
        images={selectedImages}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});

export default TabOneScreen;
