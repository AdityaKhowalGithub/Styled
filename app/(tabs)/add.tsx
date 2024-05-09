import React, { useState, useRef, useEffect } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';  // Updated to use CameraView
import { Picker } from '@react-native-picker/picker';
import { auth, storage, imagesRef } from '@/services/firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';

import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import FormData from 'form-data';
import { Buffer } from 'buffer';

interface Props {}

const AddPieceScreen: React.FC<Props> = () => {
  const cameraRef = useRef(null);
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState<String | null>(null);
  const [permissions, requestPermission] = useCameraPermissions();  // Using useCameraPermissions hook

  useEffect(() => {
    if (!permissions) {
      requestPermission();  // Request permission on component mount if permissions have not been requested yet
    }
  }, []);

  if (permissions && !permissions.granted) {
    return <Text>No access to camera</Text>;
  }

  // Other methods remain unchanged
  // ...
    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const uri = result.assets[0].uri;
      setImage(uri);
      removeBackground(uri);
    }
  };

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
      // setImage(data.uri);
      removeBackground(data.uri);
    }
  };
// You may need to install a buffer package if it's not available in your RN environment



const removeBackground = async (imageUri) => {
  const formData = new FormData();
  formData.append('size', 'auto');
  formData.append('image_file', {
    uri: imageUri,
    type: 'image/jpeg', // Make sure to set the MIME type correctly
    name: 'image.jpg', // The name of the file in the form data
  });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      headers: {
        'X-Api-Key': process.env.EXPO_PUBLIC_BG_API_KEY, // Replace with your actual API key
      },
      responseType: 'arraybuffer',
    });

    // Convert array buffer to base64 to display the image in your app
    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    const imageBase64Uri = `data:image/png;base64,${base64Image}`;

    // Set the image in your state or wherever you need it
    setImage(imageBase64Uri);
    console.log('Background removed successfully');
  } catch (error) {
    console.error('Failed to remove background:', error);
    Alert.alert('Failed to remove the background. Please try again.');
  }
};



  // const removeBackground = async (imageUri) => {
  //   console.log("1");
  //   const base64 = await FileSystem.readAsStringAsync(imageUri, { encoding: 'base64' });
  //   console.log("Base64 Length:", base64.length);
  
  //   // Assuming the API can accept base64 directly. You might need to adjust headers and data format as per API requirements.
  //   console.log('Sending request to remove.bg API');
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'https://api.remove.bg/v1.0/removebg',
  //       data: {
  //         image_file_b64: base64,
  //         size: 'auto'
  //       },
  //       headers: {
  //         'X-API-Key': '8wmpiBEP2WPuZ1UwGaAB8zYY',
  //         'Content-Type': 'application/json'  // Adjust if the API requires 'multipart/form-data'
  //       },
  //       responseType: 'json'  // Adjust based on what the response format is (e.g., json if you receive a link, blob if you receive file data directly)
  //     });
  
  //     // Handle the response
  //     console.log('Received response from remove.bg API');
  //     // Adjust how you handle the response based on the actual API response structure.
  //     // For example, if the API returns a link to the image, you can update the state with the link.
  //     //	response data:

  //     console.log(response.headers);
  //   } catch (error) {
  //     console.error('Failed to remove background:', error);
  //     Alert.alert('Failed to remove the background. Please try again.');
  //   }
  // };
  

  // const removeBackground = async (imageUri) => {
  //    console.log("1");
  // const base64 = await FileSystem.readAsStringAsync(imageUri, { encoding: 'base64' });
  // console.log("Base64 Length:", base64.length);

  // // Assuming the API can accept base64 directly. You might need to adjust headers and data format as per API requirements.
  // console.log('Sending request to remove.bg API');
  //   // const imageBlob = new Blob([new Uint8Array(Buffer.from(base64, 'base64'))], { type: 'image/jpeg' });
  //   console.log("2"); 
  //   // Setup FormData to send image to remove.bg
  //   const formData = new FormData();
  //   formData.append('size', 'auto');
  //   formData.append('image_file', imageBlob);
  //   console.log('sendin request to remove.bg API');
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'https://api.remove.bg/v1.0/removebg',
  //       data: formData,
  //       headers: {
  //         'X-API-Key': '8wmpiBEP2WPuZ1UwGaAB8zYY',
  //         'Content-Type': 'multipart/form-data'
  //       },
  //       responseType: 'blob' // Expecting a binary response
  //     });
  
  //     // Handle the response, e.g., by updating state or saving the file
  //     console.log('Received response from remove.bg API');
  //     const resultUri = FileSystem.cacheDirectory + 'no-bg.png';
  //     await FileSystem.writeAsStringAsync(resultUri, await response.data.arrayBuffer(), { encoding: FileSystem.EncodingType.Base64 });
  //     console.log('Background removed image saved to:', resultUri);
  //     setImage(resultUri); // Update your image state to show the new image
  //   } catch (error) {
  //     console.error('Failed to remove background:', error);
  //     Alert.alert('Failed to remove the background. Please try again.');
  //   }
  // };
  // const removeBackground = async (imageUri: string) => {
  //   const axios = require('axios');
  //   const FormData = require('form-data');
  
  //   const formData = new FormData();
  //   formData.append('size', 'auto');
  //   formData.append('image_url', imageUri);  // Assuming imageUri is the URL to the image you want to process
    
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'https://api.remove.bg/v1.0/removebg',
  //       data: formData,
  //       responseType: 'arraybuffer',
  //       headers: {
  //         ...formData.getHeaders(),
  //         'X-Api-Key': "8wmpiBEP2WPuZ1UwGaAB8zYY",
  //       }
  //     });
  
  //     if (response.status !== 200) {
  //       console.error('Error:', response.status, response.statusText);
  //       return;
  //     }
  
  //     // Convert the response data to a base64 string
  //     const base64Image = Buffer.from(response.data, 'binary').toString('base64');
  //     setImage(`data:image/png;base64,${base64Image}`);  // Assuming setImage is a function that sets state for showing the image
  
  //   } catch (error) {
  //       console.error('Request failed:', error);
  //   }
  // };
  


const handleSaveToFirebase = async () => {
  if (!image) {
      Alert.alert('No image to save');
      return;
  }

  try {
      const response = await fetch(image);
      const blob = await response.blob();

      const user = auth.currentUser;
      if (!user) {
          Alert.alert('You must be logged in to save images.');
          return;
      }

      const imageRef = ref(imagesRef, `${user.uid}/clothes/${category}/${new Date().toISOString()}.jpg`);
      const snapshot = await uploadBytes(imageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log('File available at', downloadURL);
      Alert.alert('Image saved successfully!', `File available at ${downloadURL}`);
  } catch (error) {
      console.error('Error saving the image:', error);
      Alert.alert('Error saving the image. Please try again.');
  }
};


  return (
    <View style={styles.container}>
      {image ? (
        <ScrollView style={styles.scrollView}>
          <Image source={{ uri: image }} style={styles.previewImage} />
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Top" value="tops" />
            <Picker.Item label="Outerwear" value="outerwear" />
            <Picker.Item label="Shoes" value="shoes" />
            <Picker.Item label="Dresses" value="dresses" />
          </Picker>
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveToFirebase}>
            <Text style={styles.saveButtonText}>Save Piece</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.retakeButton} onPress={() => setImage(null)}>
            <Text style={styles.retakeButtonText}>Retake Picture</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View style={styles.cameraWrapper}>
          <CameraView style={styles.camera} ref={cameraRef} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
              <Text style={styles.buttonText}>Capture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Pick Image</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

// Styles remain unchanged
// ...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cameraWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionsText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  previewImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
  retakeButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  retakeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddPieceScreen;

