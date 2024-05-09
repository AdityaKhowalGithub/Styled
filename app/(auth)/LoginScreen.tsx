import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { Image, StyleSheet, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebaseconfig";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import '@/assets/images/Logo.png';
import {useRouter} from "expo-router";

export default function SignInScreen(): JSX.Element {
  const router = useRouter(); // Initialize the router object
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
        alert(error.message)
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

