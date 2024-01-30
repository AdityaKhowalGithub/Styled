// import { StyleSheet } from 'react-native';
// import { Camera } from 'expo-camera';


// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

// export default function TabTwoScreen() {
  // return (
    // <View style={styles.container}>
      // <Text style={styles.title}>Tab Two</Text>
      // <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      // <Camera style={{ width: 1080, height: 1920 }} type={Camera.Constants.Type.back} />

      // </View>
  // );
// }

// const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  // },
  // title: {
    // fontSize: 20,
    // fontWeight: 'bold',
  // },
  // separator: {
    // marginVertical: 30,
    // height: 1,
    // width: '80%',
  // },
// });
//
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function TabTwoScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handlePress = () => {
    setIsCameraVisible(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
      setIsCameraVisible(false); // Optionally hide camera after taking photo
      // Handle the captured photo (e.g., save it or display it)
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {isCameraVisible && (
        <>
          <Camera style={{ width: 1080, height: 1920 }} type={Camera.Constants.Type.back} ref={cameraRef} />
          <Button title="Take Picture" onPress={takePicture} />
        </>
      )}
      {!isCameraVisible && (
        <Button title="Open Camera" onPress={handlePress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

