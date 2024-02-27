// import React, { useState, useEffect, useRef } from 'react';
// import { Alert, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Camera } from 'expo-camera';
// import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // This would be your AddPieceScreen component
// const AddPieceScreen = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
//   const isFocused = useIsFocused(); // We use this to know when the tab is focused
//   const navigation = useNavigation();
//   const route = useRoute();
//   const cameraRef = useRef(null);

//   // Ask for camera permission
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   useEffect(() => {
//     if (isFocused && hasUnsavedChanges) {
//       const discardChanges = () => {
//         setHasUnsavedChanges(false);
//         // Here you would reset the state of your component as necessary
//       };

//       Alert.alert(
//         "Discard changes?",
//         "Are you sure you want to discard this piece without saving?",
//         [
//           { text: "Don't leave", style: 'cancel', onPress: () => {} },
//           { text: 'Discard', style: 'destructive', onPress: discardChanges },
//         ]
//       );
//     }
//   }, [isFocused, hasUnsavedChanges]);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   // Function to handle taking a picture
//   const handleTakePicture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       console.log(photo);
//       setHasUnsavedChanges(true); // We now have an unsaved photo
//       // Process the photo as necessary
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Camera ref={cameraRef} style={styles.camera}>
//         <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
//           <Text style={styles.text}>Take Picture</Text>
//         </TouchableOpacity>
//       </Camera>
//     </View>
//   );
// };

// // Tab navigator setup
// const Tab = createBottomTabNavigator();

// // Main component that includes the tab navigator
// const MainComponent = () => {
//   return (
//     <Tab.Navigator>
//       {/* Other tabs */}
//       <Tab.Screen name="Add" component={AddPieceScreen} />
//       {/* Other tabs */}
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   camera: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   button: {
//     flex: 0.1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 5,
//   },
//   text: {
//     fontSize: 18,
//     color: 'black',
//   },
// });

// export default MainComponent;
import React, { useState, useEffect, useRef } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

const AddPieceScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

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
        // <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
        //   <View style={styles.buttonContainer}>
        //     <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
        //       <Text style={styles.text}> Take Photo </Text>
        //     </TouchableOpacity>
        //   </View>
        // </Camera>
        <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
  <View style={styles.overlay}>
    <View style={styles.overlayBox} />
    <Text style={styles.instructionsText}>Make sure your piece is within this box!</Text>
  </View>
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
      <Text style={styles.text}>Take Photo</Text>
    </TouchableOpacity>
  </View>
</Camera>

    
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Usually camera screen has a black background
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between', // This will allow you to position elements at the top and bottom of the screen
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // This centers the button on the screen
    marginBottom: 20, // Assuming the button is at the bottom
  },
  button: {
    width: 70, // A typical size for a camera button
    height: 70, // A typical size for a camera button
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Camera button is usually white
    borderRadius: 35, // This will make it round
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
    height: '80%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  instructionsText: {
    position: 'absolute',
    top: '50%', // Center vertically
    alignSelf: 'center', // Center horizontally
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20, // Make sure the text doesn't touch the sides
  },
  // container: {
  //   flex: 1,
  // },
  // camera: {
  //   flex: 1,
  // },
  // buttonContainer: {
  //   flex: 1,
  //   backgroundColor: 'transparent',
  //   flexDirection: 'row',
  //   margin: 20,
  // },
  // button: {
  //   flex: 0.1,
  //   alignSelf: 'flex-end',
  //   alignItems: 'center',
  // },
  // text: {
  //   fontSize: 18,
  //   color: 'white',
  // },
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
});

export default AddPieceScreen;
