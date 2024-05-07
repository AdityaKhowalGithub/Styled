// import React, { useEffect, useState } from "react";
// import {
//   Modal,
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ImageStyle,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import ScrollableGrid from "@/components/ScrollableGrid";
// import firebase from 'firebase/app';
// import 'firebase/storage';

// // Define interfaces for your props and items
// interface WardrobeItem {
//   name: string;
//   image: keyof typeof IMAGES | string; // using keyof typeof IMAGES assumes exact keys match, string gives flexibility
// }

// interface MyModalProps {
//   visible: boolean;
//   onClose: () => void;
//   items: WardrobeItem[];
// }

// const IMAGES = {
//   Rectangle1: require("@/assets/images/Rectangle1.png"),
//   Rectangle2: require("@/assets/images/Rectangle2.png"),
//   Rectangle3: require("@/assets/images/Rectangle3.png"),
// };

// const fetchWardrobeItems = async (userId) => {
//   const storageRef = firebase.storage().ref();
//   const userFolder = storageRef.child(`/images/${userId}/clothes`);
//   let wardrobeItems = { clothes: [], outfits: [] };

//   const categories = ['tops', 'outerwear', 'shoes', 'dresses'];
//   for (let category of categories) {
//     const categoryRef = userFolder.child(category);
//     const snapshot = await categoryRef.listAll();
//     const files = await Promise.all(
//       snapshot.items.map(item => item.getDownloadURL())
//     );
//     wardrobeItems.clothes.push({ name: category, items: files });
//   }

//   return wardrobeItems;
// };

// const MyModal: React.FC<MyModalProps> = ({ visible, onClose, items }) => {
//   return (
//     <Modal
//       visible={visible}
//       transparent={false}
//       animationType="slide"
//       onRequestClose={onClose}
//       style={{ flex: 1 }}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <TouchableOpacity
//             style={[styles.button, styles.buttonClose]}
//             onPress={onClose}
//           >
//             <AntDesign name="left" size={24} color="black" />
//           </TouchableOpacity>
//           <ScrollableGrid items={items} />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const MyWardrobe = ({ userId }) => {
//   const [wardrobeItems, setWardrobeItems] = useState({ clothes: [], outfits: [] });

//   useEffect(() => {
//     fetchWardrobeItems(userId).then(items => {
//       console.log('Fetched items:', items); // Add this line to log fetched data
//       setWardrobeItems(items);
//     });
//   }, [userId]);

//   return <MyModal visible={true} onClose={() => {}} items={wardrobeItems.clothes} />;
// };

// const styles = StyleSheet.create({
//   itemImage: {
//     width: 100, // Adjust as needed
//     height: 100,
//     borderRadius: 5,
//     marginBottom: 5,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   modalView: {
//     width: "100%", // Full width
//     height: "100%", // Full height
//     backgroundColor: "white",
//     padding: 20, // Adjust padding as needed, maybe less than 35 to use space more efficiently
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
//   button: {
//     borderRadius: 4,
//     padding: 5,
//     elevation: 2,
//     marginTop: 50,
//     marginRight: 300,
//   },
//   buttonClose: {
//     backgroundColor: "#D7C0AE",
//   }
// });
