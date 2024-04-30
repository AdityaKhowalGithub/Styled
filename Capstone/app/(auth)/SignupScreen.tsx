
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { useRef } from "react";
import { AuthStore, appSignUp } from "../../store";
import { Stack, useRouter } from "expo-router";


export default function CreateAccount() {
    const router = useRouter();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    ref={emailRef}
                    style={styles.textInput}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    ref={passwordRef}
                    style={styles.textInput}
                    placeholder="Enter your password"
                    secureTextEntry
                />
            </View>
            <Button title="Sign in Instead" onPress={() => {
                router.push("/(auth)/LoginScreen");
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
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

