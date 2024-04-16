import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Button
} from "react-native";
import IMAGES from "@/components/IMAGES";
import wardrobeCategories from "@/assets/wardrobeItems.json";
import { AuthStore } from "../../store"; // Ensure you import AuthStore
import { useRouter } from 'expo-router'; // Ensure you import useRouter

// Import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// Normally, you would initialize Firebase here with your config
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const ProfileScreen = ({ userId }) => {
    const [profileData, setProfileData] = useState({
        name: "",
        username: "",
        bio: "",
        profileImageUri: "",
        lookbooks: [],
    });

    // State to store the selected category
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const router = useRouter(); // Use useRouter hook for navigation

    useEffect(() => {
        const dummyData = {
            name: "Dior Simmons",
            username: "diorhandbag",
            bio: "Hi everyone! My name is dior and I love Gucci. I have two pet flamingos!",
            lookbooks: [
                {
                    title: "Y2K_inspo",
                    id: 1,
                    categories: [
                        { name: "Tops", items: ["Top1", "Top3"] },
                        { name: "Bottoms", items: ["Bottom1"] },
                    ],
                },
                {
                    title: "Spring_Lover",
                    id: 2,
                    categories: [{ name: "Shoes", items: ["shoes1", "shoes2"] }],
                },
            ],
        };

        setTimeout(() => {
            setProfileData(dummyData);
        }, 1000);
    }, [userId]);

    const renderLookbooks = () => {
        const categories = Object.values(wardrobeCategories["lookbooks"]);
        return (
            <ScrollView contentContainerStyle={styles.grid}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.gridItem}
                        onPress={() => {
                            setSelectedCategory(category.name);
                        }}
                    >
                        <Image source={IMAGES[category.name]} style={styles.itemImage} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    if (!profileData.name) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.profileImage}
                    source={require("@/assets/images/TestPFP.png")}
                />
                <Text style={styles.name}>{profileData.name}</Text>
                <Text style={styles.username}>@{profileData.username}</Text>
            </View>

            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>{profileData.bio}</Text>
            </View>

            <View style={styles.lookbooksContainer}>
                <Text style={styles.lookbooksTitleText}>My Lookbooks</Text>
                {renderLookbooks()}
            </View>
            <Button
                title="Sign Out"
                onPress={() => {
                    AuthStore.update(s => { s.isLoggedIn = false; });
                    router.replace("/(auth)/LoginScreen");
                }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    // Other existing styles...
    lookbooksContainer: {
        padding: 20,
    },
    lookbooksTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    grid: {
        flexDirection: "row", // Arrange items in a row
        flexWrap: "wrap", // Allow items to wrap to the next line
        justifyContent: "space-between", // Distribute extra space evenly
    },
    gridItem: {
        width: "48%", // Two items per row, adjust accordingly
        aspectRatio: 1, // Keep items square-shaped, adjust if needed
        marginBottom: 10, // Spacing between rows
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
    },
    itemImage: {
        width: "100%", // Take up all available width in gridItem
        height: "100%", // Height is determined by aspectRatio
        borderRadius: 10, // Optional: rounded corners
    },

    headerContainer: {
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    itemContainer: {
        alignItems: "center", // Center items vertically
        marginRight: 10, // Spacing between items
    },

    itemText: {
        marginTop: 5, // Space between image and text label
        fontSize: 12,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    username: {
        fontSize: 16,
        color: "grey",
    },
    bioContainer: {
        padding: 20,
    },
    bioText: {
        fontSize: 14,
        fontStyle: "italic",
    },

    lookbookItem: {
        // Style for each lookbook item
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    // Add more styles as needed
});

export default ProfileScreen;
