import React, { useState, useRef, useEffect } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Picker } from '@react-native-picker/picker';
import { auth, storage, imagesRef } from '@/services/firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import FormData from 'form-data';
import { BG_API_KEY } from '@env';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { getAuth } from 'firebase/auth';
import { Buffer } from 'buffer';

interface Props {}

const AddPieceScreen: React.FC<Props> = () => {
  // const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState<String | null>(null);
  const cameraRef = useRef<Camera>(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
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
      setImage(data.uri);
      removeBackground(data.uri);
    }
  };

 const removeBackground = async (imageUri: string) => {
  const formData = new FormData();
  const response = await fetch(imageUri);
  const blob = await response.blob();
  const fileType = imageUri.split('.').pop() ?? 'jpg';

  formData.append('size', 'auto');
  formData.append('image_file', blob, `photo.${fileType}`);

  try {
    const axiosResponse = await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      headers: {
        'X-Api-Key': BG_API_KEY,
      },
      responseType: 'arraybuffer',
    });

    if (axiosResponse.status === 200) {
      const imageBase64 = Buffer.from(axiosResponse.data, 'binary').toString('base64');
      const newImageUri = `data:image/${fileType};base64,${imageBase64}`;
      setImage(newImageUri);
    }
 } catch (error) {
  if (error.response) {
    console.error('Request failed with status:', error.response.status);
    console.error('Response data:', error.response.data);
    Alert.alert('Error with remove.bg API:', JSON.stringify(error.response.data));
  } else {
    console.error('Request failed:', error.message);
  }
}

}; 


 const handleSaveToFirebase = async () => {
    if (!image) {
        Alert.alert('No image to save');
        return;
    }

    try {
        const response = await fetch(image);
        const blob = await response.blob();
        
        // Use the Firebase storage reference to upload the file
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
        // When there is no image, show camera view or image picker option
        <View style={styles.cameraWrapper}>
          <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
            <View style={styles.overlay}>
              <Text style={styles.instructionsText}>Align your piece within the frame and tap the button below to capture.</Text>
            </View>
          </Camera>
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

