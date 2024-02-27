import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
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
  // State to store profile data
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    bio: '',
    profileImageUri: '',
    lookbooks: [],
  });

  useEffect(() => {
    // Dummy data for the profile
    const dummyData = {
      name: 'Jennifer Coolidge',
      username: 'jenniferlovespink',
      bio: 'Hi everyone! My name is Jennifer and I love pink. My two pet flamingos SSR and TXI love it too!',
      profileImageUri: '../assets/images/TestPFP.png', // Replace with actual image path
      lookbooks: [
        { title: 'Y2K', id: 1 },
        { title: 'All pink', id: 2 },
        { title: 'Going out', id: 3 },
        { title: 'Comfy', id: 4 }
        // ... other lookbooks
      ],
    };
    
    // Simulating a fetch request with a timeout
    setTimeout(() => {
      setProfileData(dummyData);
    }, 1000);
  }, [userId]);

  if (!profileData.name) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: profileData.profileImageUri }}
        />
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.username}>@{profileData.username}</Text>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{profileData.bio}</Text>
      </View>

      <View style={styles.lookbooksContainer}>
        <Text style={styles.lookbooksTitleText}>My Lookbooks</Text>
        {profileData.lookbooks.map((lookbook) => (
          <TouchableOpacity key={lookbook.id} style={styles.lookbookItem}>
            <Text>{lookbook.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 16,
    color: 'grey',
  },
  bioContainer: {
    padding: 20,
  },
  bioText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  lookbooksContainer: {
    padding: 20,
  },
  lookbooksTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lookbookItem: {
    // Style for each lookbook item
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  // Add more styles as needed
});

export default ProfileScreen;
