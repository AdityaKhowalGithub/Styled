// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import firebase from '@/services/firebaseconfig';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/services/firebaseconfig"; // adjust the path as necessary

// const LoginScreen = () => {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleLogin = async () => {
// try {
// const userCredential = await signInWithEmailAndPassword(auth, email, password);
// console.log("Logged in with:", userCredential.user);
// } catch (error) {
// console.error("Login failed:", error);
// }
// };
// return (
// <View style={styles.container}>
// <TextInput
// placeholder="Email"
// value={email}
// onChangeText={setEmail}
// style={styles.input}
// keyboardType="email-address"
// />
// <TextInput
// placeholder="Password"
// value={password}
// onChangeText={setPassword}
// style={styles.input}
// secureTextEntry
// />
// <Button title="Log In" onPress={handleLogin} />
// </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// justifyContent: 'center',
// padding: 20,
// },
// input: {
// marginBottom: 12,
// borderWidth: 1,
// padding: 8,
// },
// });

// export default LoginScreen;
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { AuthStore, appSignIn } from "../../store";
import { Stack, useRouter } from "expo-router";
import { useRef } from "react";

export default function LogIn() {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="email"
                    autoCapitalize="none"
                    nativeID="email"
                    onChangeText={(text) => {
                        emailRef.current = text;
                    }}
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    nativeID="password"
                    onChangeText={(text) => {
                        passwordRef.current = text;
                    }}
                    style={styles.textInput}
                />
            </View>
            <Text
                onPress={async () => {
                    const resp = await appSignIn(emailRef.current, passwordRef.current);
                    if (resp?.user) {
                        router.replace("/(tabs)");
                    } else {
                        console.log(resp.error)
                        Alert.alert("Login Error", resp.error?.message)
                    }
                }}
            >
                Login
            </Text>
            <Text
                onPress={() => {
                    AuthStore.update((s) => {
                        s.isLoggedIn = true;
                    });
                    router.push("/SignupScreen");
                }}
            >
                Create Account
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 4,
        color: "#455fff",
    },
    textInput: {
        width: 250,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#455fff",
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 8,
    },
});
