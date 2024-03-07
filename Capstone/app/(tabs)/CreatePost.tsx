import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableHighlight, Alert, Button, Modal } from 'react-native';
import UploadImage from './UploadImage';

const PostScreen = ({}) => {
	
  // State to store post data
  const [communityData, setCommunityData] = useState({
		communityName: '',
  });

  const [number, onChangeNumber] = React.useState('');

  useEffect(() => {
    // Dummy data for the feed
    const communityData = {
        communityName: 'Seattle Vintage Collect',
    };
    
    // Simulating a fetch request with a timeout
    setTimeout(() => {
      setCommunityData(communityData);
    }, 1000);
  });

  if (!communityData.communityName) {
    return <Text>Loading...</Text>;
  }

  return (
		<ScrollView style={styles.container}>
			
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Create a Post</Text>
			</View>
      <Text style={styles.categories}>{communityData.communityName}</Text>
      <View style={styles.createPostContainer}>
        <Text style={styles.postText}>
					<Text style={styles.name}>{communityData.communityName}</Text>
				</Text>
				<Button
          title="X"
          onPress={() => Alert.alert('Exit button pressed')}
      	/>
        <Text style={styles.name}>Post content</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Tell the community of your thoughts."
          keyboardType="numeric"
        />
        <Text style={styles.name}>Poll</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="What insight do you want to get?"
          keyboardType="numeric"
        />
        <Text style={styles.name}>Image</Text>
        <UploadImage/>
        <Text style={styles.name}>Privacy</Text>
        <Text style={styles.categories}>This is a public community.</Text>
        <Text style={styles.postText}>Anyone can view your post.</Text>
        
        <Button
          title="Save Draft"
          onPress={() => Alert.alert('Save Draft button pressed')}
      	/>
        <Button
          title="Post"
          onPress={() => Alert.alert('Post button pressed')}
      	/>
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
	header: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#333',
	},
  categories: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 10,
    height: 10,
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
 createPostContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
	postText: {
		fontSize: 24,
		color: 'black',
	},
	postImage: {
		width: 150,
		height: 150,
		borderRadius: 50,
		marginBottom: 10,
	},
	icon: {
		width: 8,
		height: 8,
		marginBottom: 10,
	},
	btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
	
});

export default PostScreen;
