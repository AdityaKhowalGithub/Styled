import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';

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

