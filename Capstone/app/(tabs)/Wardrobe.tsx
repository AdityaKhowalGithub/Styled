
// import Button from "@/components/Button"; // Adjust the path as necessary
// import HorizontalScrollView from "@/components/HorizontalView";
// import SummaryContainer from "@/components/SummaryContainer"; // Adjust the path as necessary
// import { Text, View } from "@/components/Themed";
// import WelcomeSection from "@/components/WardrobeWelcome"; // Adjust the path as necessary
// import wardrobeItems from "@/assets/wardrobeItems.json";
// import { useNavigation } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import wardrobeCategories from "@/assets/wardrobeItems.json";
// // import MyModal from "@/components/WardrobeModel";
// import WardrobeModal from "@/components/WardrobeModel";
// import LookbookModal from "@/components/LookbookModel";
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// const fetchCategories = async () => {
//   const db = getFirestore();
//   const categoryCol = collection(db, 'categories'); // 'categories' should be your collection
//   const categorySnapshot = await getDocs(categoryCol);
//   const categories = categorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   return categories;
// };

// interface Item {
//   id: string;
//   // Add other properties here
// }

// const fetchItems = async (category: string): Promise<Item[]> => {
//   const db = getFirestore();
//   const itemsCol = collection(db, `categories/${category}/items`); // Adjust path as needed
//   const itemsSnapshot = await getDocs(itemsCol);
//   const items = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Item));
//   return items;
// };
// export default function TabOneScreen() {
//   const navigation = useNavigation();
//   const [WmodalVisible, WsetModalVisible] = useState(false);
//   const [lmodalVisible, lsetModalVisible] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [wardrobeItems, setWardrobeItems] = useState({});
//   useEffect(() => {
//     navigation.setOptions({ headerShown: false });
//     fetchCategories().then(categories => {
//       setCategories(categories);
//       categories.forEach(category => {
//         fetchItems(category.id).then(items => {
//           setWardrobeItems(prev => ({ ...prev, [category.name]: items }));
//         });
//       });
//     });
//   }, [navigation]);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({ headerShown: false });
//   }, [navigation]);
//   return (

//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.container}>
//       <WelcomeSection />
      
//       ))}
       
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   headerContainer: {
//     backgroundColor: "#FFF8ED",
//     paddingVertical: 21,
//     paddingRight: 18,
//     marginBottom: 14,
//     marginLeft: 32,
//   },
//   headerText: {
//     color: "#000",
//     fontSize: 22,
//     marginBottom: 16,
//     marginLeft: -12, // Adjusted to align text properly
//   },
//   totalPiecesContainer: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     paddingTop: 35,
//     paddingBottom: 24,
//     marginLeft: -10, // Adjusted for alignment
//     marginHorizontal: 22,
//   },
//   totalPiecesText: {
//     color: "#000",
//     fontSize: 18,
//     marginBottom: 16,
//     marginHorizontal: 23,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   pieceDetailText: {
//     color: "#000",
//     fontSize: 15,
//     marginHorizontal: 7,
//   },
//   wardrobeTitleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//     marginHorizontal: 23,
//   },
//   wardrobeTitleText: {
//     color: "#684440",
//     fontSize: 18,
//     marginRight: 16,
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 12,
//     marginHorizontal: 18,
//   },
//   buttonBase: {
//     width: 166,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 5,
//     paddingVertical: 9,
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//   },
//   wardrobeHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//     marginHorizontal: 23,
//   },
//   wardrobeHeaderText: {
//     color: "#684440",
//     fontSize: 18,
//     marginRight: 16,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 12,
//     marginHorizontal: 18,
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });



import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, Image, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WardrobeModal from '@/components/WardrobeModel'; 
import { storageRef, imagesRef } from '@/services/firebaseconfig'; // Adjust the import according to your file structure
import { listAll, ref, getDownloadURL } from "firebase/storage";

const TabOneScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [wardrobeItems, setWardrobeItems] = useState({ clothes: [], outfits: [] });
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    // Dummy data fetching simulation
    const fetchedItems = {
      clothes: [{ name: 'Jeans' }, { name: 'T-shirt' }],
      outfits: [{ name: 'Casual' }, { name: 'Formal' }]
    };
    setWardrobeItems(fetchedItems);

    // Firebase storage fetching
    const clothesRef = ref(storageRef, `images/CIUiYftrRUXXfcW7DlvwfrPObOC2/clothes`);
    listAll(clothesRef)
      .then((res) => {
        const urls = res.items.map((itemRef) => {
          return getDownloadURL(itemRef);
        });
        return Promise.all(urls);
      })
      .then((urls) => {
        setImages(urls);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigation]);

  const renderImage = ({ item }: { item: string }) => (
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
          wardrobeItems={wardrobeItems}
        />
        <FlatList
          data={images}
          renderItem={renderImage}
          numColumns={3} // You can change the number of columns here
          keyExtractor={(_, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabOneScreen;

