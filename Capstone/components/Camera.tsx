import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';

export default function CameraTab() {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} />
            <Button title="Take a picture" onPress={() => {}} />
        </>
    );
}
