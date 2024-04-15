import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// import firebase from '@/services/firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebaseconfig"; // adjust the path as necessary

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in with:", userCredential.user);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            <Button title="Log In" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        padding: 8,
    },
});

export default LoginScreen;

