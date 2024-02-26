import React, { useState, useRef } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { View } from '@/components/Themed';
const AddPieceScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [form, setForm] = useState({ type: '', size: '', brand: '', acquisition: '', date: '' });
  const cameraRef = useRef<Camera | null>(null);

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  // Call this function when the component is mounted
  React.useEffect(() => {
    askForCameraPermission();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
      setIsProcessing(true);
      // Simulate image processing delay
      setTimeout(() => {
        setIsProcessing(false);
      }, 2000);
    }
  };

  const renderCameraView = () => (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Snap</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );

  const renderProcessingView = () => (
    <View style={styles.processingContainer}>
      <Text>Cropping your image...</Text>
      {/* Show a progress bar or an activity indicator */}
    </View>
  );

  const renderFormView = () => (
    <View style={styles.formContainer}>
      {/* Form fields and a button to submit */}
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={form.type}
        onChangeText={(text) => setForm({ ...form, type: text })}
      />
      {/* Other form fields */}
      <Button title="Add Piece" onPress={() => {}} />
    </View>
  );

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {!imageUri && !isProcessing && renderCameraView()}
      {isProcessing && renderProcessingView()}
      {imageUri && !isProcessing && renderFormView()}
    </View>
  );
};

const styles = StyleSheet.create({
  // Add styles here
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formContainer: {
    padding: 15,
  },
  processingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Add more styles as needed
});

export default AddPieceScreen;
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
