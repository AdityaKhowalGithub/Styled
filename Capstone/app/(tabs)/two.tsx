import { StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import React, { useState } from 'react';

import { Text, View } from '@/components/Themed';
export default function TabTwoScreen() {
    const [openCamera, setOpenCamera] = useState(false);

    //by defauly camera is closed, when button is pressed, open camera 
    
    if (openCamera) {
        return (
            <View style={styles.container}>
                <Camera style={{ width: 1080, height: 1920 }} type={Camera.Constants.Type.back} />
            </View>
        );
    }else{ 
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Tab Two</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Button title="Open Camera" onPress={() => setOpenCamera(true)} />
            </View>
        );
    }
    // <View style={styles.container}>
            // <Text style={styles.title}>Tab Two</Text>
            // <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            // <Camera style={{ width: 1080, height: 1920 }} type={Camera.Constants.Type.back} />
        // </View>
    // );    
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
