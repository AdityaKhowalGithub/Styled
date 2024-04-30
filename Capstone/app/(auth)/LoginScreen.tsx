// import { Text, View } from "@/components/Themed";
// import * as React from "react";
// import { Image, StyleSheet, TextInput, Button, useColorScheme } from "react-native";
// import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/services/firebaseconfig";
// import { FontAwesome as Icon } from "@expo/vector-icons";
// import * as WebBrowser from "expo-web-browser";
// import { useRouter } from "expo-router";
// import '@/assets/images/Logo.png';
// import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
//
// WebBrowser.maybeCompleteAuthSession();
// const googleProvider = new GoogleAuthProvider();
//
//
//
//
//
// export default function SignInScreen(): JSX.Element {
//     const router = useRouter();
//
//
//     const [txtEmail, setEmail] = useState('');
//     const [txtPassword, setPassword] = useState('');
//     const [isLoading, setLoading] = useState(false);
//     const signIn = () => {
//       setLoading(true);
//       auth
//       .signInWithEmailAndPassword(txtEmail, txtPassword)
//       .then(result => {
//         if (result) {
//           setLoading(false);
//           navigation.navigate('HomeScreen');
//         }
//       })
//       .catch(({ message }) => {
//         alert(message);
//         setLoading(false);
//       });
//        
//
//
//     //    const { redirectUri } = useAuthRequest(
//     //     {
//     //         clientId: process.env.WEB_CLIENT_ID!,
//     //         scopes: ["openid", "email", "profile"],
//     //         redirectUri: makeRedirectUri({
//     //             useProxy: true  // Adjust based on your development or production needs
//     //         }),
//     //     },
//     //     discovery
//     // );
//     //
//     // async function handleEmailPasswordSignIn() {
//     //     try {
//     //         const data = await signInWithEmailAndPassword(auth, email, password);
//     //         console.log("Email/password login success:", JSON.stringify(data, null, 2));
//     //     } catch (error) {
//     //         console.error("Email/password sign-in error:", error);
//     //     }
//     // }
//     // console.log("currentTheme", currentTheme);
//
//     // UI Layout
//     return (
//         <View style={styles.container}>
//             <Image
//                 source={require('@/assets/images/Logo.png')}
//                 style={{ height: 100, marginBottom: 10, borderRadius: 50 }}
//             />
//             <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>
//                 Login Screen
//             </Text>
//             <TextInput
//                 style={styles.input}
//                 onChangeText={setEmail}
//                 value={txtEmail}
//                 placeholder="Enter your email"
//                 keyboardType="email-address"
//             />
//             <TextInput
//                 style={styles.input}
//                 onChangeText={setPassword}
//                 value={txtPassword} 
//                 placeholder="Enter your password"
//                 secureTextEntry
//             />
//             <Button title="Sign In with Email" onPress={signIn} />
//             <Button title="Sign up Instead" onPress={() => {
//                 router.push("/(auth)/SignupScreen");
//             }} />
//             <Icon.Button
//                 name="google"
//                 color={currentTheme === "light" ? "black" : "white"}
//                 backgroundColor={"transparent"}
//                 onPress={() => {
//                     
//                 }}
//             //"#db4437"
//             >
//                 <Text>Sign in with google </Text>
//
//             </Icon.Button>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         width: 200,
//     },
// });
//
//
//
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { Image, StyleSheet, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebaseconfig";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import '@/assets/images/Logo.png';

export default function SignInScreen(): JSX.Element {
    const navigation = useNavigation();
    const [txtEmail, setEmail] = useState('');
    const [txtPassword, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('_layout.tsx');

    const signIn = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, txtEmail, txtPassword)
            .then((userCredential) => {
                // Signed in
                setLoading(false);
                router.replace("/(tabs)"); 
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message); // Display error message in UI
            });
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/Logo.png')}
                style={{ height: 100, marginBottom: 10, borderRadius: 50 }}
            />
            <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>
                Login Screen
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={txtEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={txtPassword} 
                placeholder="Enter your password"
                secureTextEntry
            />
            <Button title="Sign In with Email" onPress={signIn} />
            <Button title="Sign up Instead" onPress={() => {
                router.push("/(auth)/SignupScreen");
            }} />
                    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
});

