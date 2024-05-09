
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, Image, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WardrobeModal from '@/components/WardrobeModel';
import { imagesRef } from '@/services/firebaseconfig'; // Ensure correct path
import { listAll, getDownloadURL, ref } from "firebase/storage";

const TabOneScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const clothesRef = ref(imagesRef, `clothes/`); // Adjust this path as necessary
        const response = await listAll(clothesRef);
        const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
        setImages(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const renderImage = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: item }} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>My Wardrobe</Text>
        </TouchableOpacity>
        <WardrobeModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          wardrobeItems={images} // Ensure this is the correct prop
        />
        <FlatList
          data={images}
          renderItem={renderImage}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabOneScreen;


