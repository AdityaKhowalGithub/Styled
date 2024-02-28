
import React, { useState, useEffect, useRef } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';



const AddPieceScreen = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  // Request camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPhoto(data);
      // Navigate to another screen or update state here if needed
    }
  };
  const handleRetakePicture = () => {
    setPhoto(null);
  };
  const handleSavePiece = () => {
    // Save the piece to your state or backend
    alert('Piece saved!');
    // Reset the state and navigate if necessary
    setType('');
    setSize('');
    setBrand('');
    setPhoto(null);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <ScrollView style={styles.scrollView}>
          <Image source={{ uri: photo.uri }} style={styles.previewImage} />
          <View style={styles.formContainer}>
            <Text style={styles.label}>Type</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter type of piece"
              value={type}
              onChangeText={setType}
            />
            <Text style={styles.label}>Size</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter size"
              value={size}
              onChangeText={setSize}
            />
            <Text style={styles.label}>Brand</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter brand"
              value={brand}
              onChangeText={setBrand}
            />
            {/* Add additional input fields as necessary */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSavePiece}>
              <Text style={styles.saveButtonText}>Save Piece</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.retakeButton} onPress={handleRetakePicture}>
              <Text style={styles.retakeButtonText}>Retake Picture</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (

        <View style={styles.container}>
          <View style={styles.cameraWrapper}>
            <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
              <View style={styles.overlay}>
                {/* <View style={styles.overlayBox} /> */}

                <View style={[styles.corner, styles.topLeftCorner, { top: 0, left: 0 }]} />
                <View style={[styles.corner, styles.topRightCorner, { top: 0, right: 0 }]} />
                <View style={[styles.corner, styles.bottomLeftCorner, { bottom: 0, left: 0 }]} />
                <View style={[styles.corner, styles.bottomRightCorner, { bottom: 0, right: 0 }]} />
                <Text style={styles.instructionsText}>Make sure your piece is within this box!</Text>

                <Text style={styles.instructionsText}>Make sure your piece is within this box!</Text>
              </View>

            </Camera>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleTakePicture}>

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
    backgroundColor: 'white', // Set the background color of the whole screen
  },

  cameraWrapper: {
    width: '80%', // Adjust the width to what you want
    alignSelf: 'center', // This will center the cameraWrapper
    marginTop: 100, // Add some margin at the top
    aspectRatio: 0.5625, // Keep the aspect ratio of the cameraWrapper
    borderWidth: 1, // Add a border to see the box clearly
    borderColor: 'black', // Set the border color
  },
  camera: {
    flex: 1, // Camera should fill the entire space of its container
  },
  buttonContainer: {
    position: 'absolute', // This positions your button container absolutely within its parent
    left: 0, // Aligns the container to the left
    right: 0, // Aligns the container to the right
    bottom: 20, // Positions the container 20 pixels from the bottom of the screen
    justifyContent: 'center', // Centers the button horizontally
    alignItems: 'center', // Centers the button vertically (useful if the container has a height)
  },
  button: {
    width: 70, // A typical size for a camera button
    height: 70, // A typical size for a camera button
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4A4A', // Camera button is usually white
    borderRadius: 35, // This will make it round
    // Add shadows or other styling as needed
  },
  text: {
    fontSize: 18,
    color: 'black', // Text is usually black on a white button
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
  overlayBox: {
    width: '90%',
    height: '90%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  instructionsText: {
    position: 'absolute',
    top: '50%', // Center vertically
    alignSelf: 'center', // Center horizontally
    color: '#000000',
    opacity: 0.5, // Make the text semi-transparent
    textAlign: 'center',
    paddingHorizontal: 20, // Make sure the text doesn't touch the sides
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  previewImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  retakeButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10, // Add some margin at the top if needed
  },
  retakeButtonText: {
    fontSize: 18,
    color: '#fff',
  },


  corner: {
    position: 'absolute',
    width: 30, // Width of the corner
    height: 30, // Height of the corner
    borderColor: 'white', // Corner color
  },
  topLeftCorner: {
    borderTopWidth: 5, // Thickness of the border
    borderLeftWidth: 5, // Thickness of the border
  },
  topRightCorner: {
    borderTopWidth: 5,
    borderRightWidth: 5,
  },
  bottomLeftCorner: {
    borderBottomWidth: 5,
    borderLeftWidth: 5,
  },
  bottomRightCorner: {
    borderBottomWidth: 5,
    borderRightWidth: 5,
  },

});

export default AddPieceScreen;
