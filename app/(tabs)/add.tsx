import React, { useState, useRef, useEffect } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Picker } from '@react-native-picker/picker';
import { auth, storage, imagesRef } from '@/services/firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import FormData from 'form-data';
import { Buffer } from 'buffer';

const AddPieceScreen = () => {
  const cameraRef = useRef(null);
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [sustainability, setSustainability] = useState<string | null>(null);
  const [permissions, requestPermission] = useCameraPermissions();
  const firestore = getFirestore();

  useEffect(() => {
    if (!permissions) {
      requestPermission();
    }
  }, []);

  if (permissions && !permissions.granted) {
    return <Text>No access to camera</Text>;
  }

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
      removeBackground(data.uri);
    }
  };

  const removeBackground = async (imageUri) => {
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: formData,
        headers: {
          'X-Api-Key': process.env.EXPO_PUBLIC_BG_API_KEY,
        },
        responseType: 'arraybuffer',
      });

      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      const imageBase64Uri = `data:image/png;base64,${base64Image}`;
      setImage(imageBase64Uri);
    } catch (error) {
      Alert.alert('Failed to remove the background. Please try again.');
    }
  };

  const handleSaveToFirebase = async () => {
    if (!image || !category || !sustainability) {
      Alert.alert('Please select an image, category, and sustainability rating.');
      return;
    }
  
    try {
      console.log('Fetching the image from URI...');
      const response = await fetch(image);
      const blob = await response.blob();
      console.log('Image fetched successfully');
  
      const user = auth.currentUser;
      if (!user) {
        Alert.alert('You must be logged in to save images.');
        return;
      }
  
      const timestamp = new Date().toISOString();
      const fileName = `${timestamp}.jpg`;
      console.log('Uploading image to Firebase Storage...');
      const imageRef = ref(imagesRef, `${user.uid}/clothes/${category}/${fileName}`);
      await uploadBytes(imageRef, blob);
      console.log('Image uploaded successfully');
  
      const downloadURL = await getDownloadURL(imageRef);
      console.log('Download URL obtained:', downloadURL);
  
      console.log('Saving metadata to Firestore...');
      const docRef = doc(getFirestore(), `users/${user.uid}/clothes/${category}`);
      await setDoc(docRef, {
        filePath: {
          [fileName]: sustainability,
        }
      }, { merge: true });
      console.log('Metadata saved to Firestore successfully');
  
      Alert.alert('Image saved successfully!');
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
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Top" value="tops" />
            <Picker.Item label="Outerwear" value="outerwear" />
            <Picker.Item label="Shoes" value="shoes" />
            <Picker.Item label="Dresses" value="dresses" />
          </Picker>
          <Picker
            selectedValue={sustainability}
            onValueChange={(itemValue) => setSustainability(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Gift" value="gift" />
            <Picker.Item label="Thrift" value="thrift" />
            <Picker.Item label="Shopping" value="bought" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cameraWrapper: {
    flex: 1,
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
  scrollView: {
    flex: 1,
  },
  previewImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  picker: {
    margin: 10,
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
