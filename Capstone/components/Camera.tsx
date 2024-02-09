import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [pictureUri, setPictureUri] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      setPictureUri(photo.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => { this.camera = ref; }}>
        <View style={styles.buttonContainer}>
          <Button title="Take Picture" onPress={() => takePicture()} />
        </View>
      </Camera>
      {pictureUri && <Image source={{ uri: pictureUri }} style={styles.previewImage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
  },
  previewImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default CameraComponent;
