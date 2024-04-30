import { Text, View } from "@/components/Themed";
import * as React from "react";
import { Image, StyleSheet, TextInput, Button, useColorScheme } from "react-native";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebaseconfig";
import { FontAwesome as Icon } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";
import '@/assets/images/Logo.png';
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();
const googleProvider = new GoogleAuthProvider();



const discovery = {
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revocationEndpoint: 'https://oauth2.googleapis.com/revoke/${process.env.WEB_CLIENT_ID}',
    userInfoEndpoint: 'https://openidconnect.googleapis.com/v1/userinfo',
};

// signInWithRedirect(auth, googleProvider);


export default function SignInScreen(): JSX.Element {
    const router = useRouter();
    const currentTheme = useColorScheme();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // const [request, response, promptAsync] = useAuthRequest(
    // {
    // clientId: process.env.WEB_CLIENT_ID!,
    // scopes: ["identity", "user:email", "user:follow"],
    // redirectUri: makeRedirectUri({
    // useProxy: true,
    // native: 'com.yourapp:/oauthredirect',  // Replace 'com.yourapp' with your actual reverse DNS notation app identifier
    // }),

    // redirectUri: makeRedirectUri(),
    // },
    // discovery
    // );
    const { redirectUri } = useAuthRequest(
        {
            clientId: process.env.WEB_CLIENT_ID!,
            scopes: ["openid", "email", "profile"],
            redirectUri: makeRedirectUri({
                useProxy: true  // Adjust based on your development or production needs
            }),
        },
        discovery
    );


    // React.useEffect(() => {
    // handleResponse();
    // }, [response]);
    async function handleEmailPasswordSignIn() {
        try {
            const data = await signInWithEmailAndPassword(auth, email, password);
            console.log("Email/password login success:", JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("Email/password sign-in error:", error);
        }
    }
    console.log("currentTheme", currentTheme);

    // UI Layout
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
                value={email}
                placeholder="Enter your email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter your password"
                secureTextEntry
            />
            <Button title="Sign In with Email" onPress={handleEmailPasswordSignIn} />
            <Button title="Sign up Instead" onPress={() => {
                router.push("/(auth)/SignupScreen");
            }} />
            <Icon.Button
                name="google"
                color={currentTheme === "light" ? "black" : "white"}
                backgroundColor={"transparent"}
                onPress={() => {
                    promptAsync({ windowName: "Code with Beto" });
                }}
            //"#db4437"
            >
                <Text>Sign in with google </Text>

            </Icon.Button>
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

