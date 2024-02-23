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

const ProfileScreen = ({ userId }: { userId: string }) => {
  // Define your state type here
  const [profileData, setProfileData] = useState<null | {
    name: string;
    username: string;
    bio: string;
    profileImageUri: string;
    lookbooks: { title: string; id: number }[];
  }>(null);

  useEffect(() => {
    // Here you would fetch data from Firebase
    // For now, we're using dummy data
    // const userRef = firebase.firestore().collection('users').doc(userId);
    // userRef.get().then((doc) => {
    //   if (doc.exists) {
    //     setProfileData(doc.data());
    //   } else {
    //     console.log('No such user!');
    //   }
    // }).catch((error) => {
    //   console.log('Error getting user:', error);
    // });

    // Dummy data for the example
    const dummyData = {
      name: 'Jennifer Coolidge',
      username: 'jenniferlovespink',
      bio: 'Hi everyone! My name is Jennifer and I love pink. My two pet flamingos SSR and TXI love it too!',
      profileImageUri: '../assets/images/TestPFP.png', // Replace with actual image path
      lookbooks: [
        { title: 'Y2K', id: 1 },
        // ... other lookbooks
      ],
    };
    setProfileData(dummyData);
  }, [userId]);

  if (!profileData) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
          {/* Profile Header */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: profileData.profileImageUri }}
        />
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.username}>@{profileData.username}</Text>
        {/* Add other profile info here */}
      </View>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{profileData.bio}</Text>
      </View>

      {/* Lookbooks Section */}
      <View style={styles.lookbooksContainer}>
        <Text style={styles.lookbooksTitle}>My Lookbooks</Text>
        {profileData.lookbooks.map((lookbook) => (
          <TouchableOpacity key={lookbook.id} style={styles.lookbooksTitle}>
            <Text>{lookbook.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Implement other sections such as settings if needed */}
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
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
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
  },
  italicText: {
    fontStyle: 'italic',
  },
  lookbooksContainer: {
    // styles for lookbooks container
  },
  lookbooksTitle: {
    // styles for lookbooks title
  },
  // Add more styles as needed
});

export default ProfileScreen;
