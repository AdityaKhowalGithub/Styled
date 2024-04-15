// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// const SignupScreen = () => {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleSignup = async () => {
// Implement signup logic with Firebase here
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
// <Button title="Sign Up" onPress={handleSignup} />
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

// export default SignupScreen;
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useRef } from "react";
import { AuthStore, appSignUp } from "../../store";
import { Stack, useRouter } from "expo-router";

export default function CreateAccount() {
    const router = useRouter();
    const emailRef = useRef("");
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const passwordRef = useRef("");

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen
                options={{ title: "Create Account", headerLeft: () => <></> }}
            />
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="email"
                    nativeID="email"
                    onChangeText={(text) => {
                        emailRef.current = text;
                    }}
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    placeholder="firstName"
                    nativeID="firstName"
                    onChangeText={(text) => {
                        firstNameRef.current = text;
                    }}
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    placeholder="lastName"
                    nativeID="lastName"
                    onChangeText={(text) => {
                        lastNameRef.current = text;
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
                style={{ marginBottom: 8 }}
                onPress={async () => {
                    const resp = await appSignUp(
                        emailRef.current,
                        passwordRef.current,
                        firstNameRef.current + " " + lastNameRef.current
                    );
                    if (resp?.user) {
                        router.replace("/(tabs)");
                    } else {
                        console.log(resp.error);
                        alert(resp.error?.message);
                    }
                }}
            >
                SAVE NEW USER
            </Text>

            <Text
                onPress={() => {
                    AuthStore.update((s) => {
                        s.isLoggedIn = false;
                    });
                    router.back();
                }}
            >
                CANCEL
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
