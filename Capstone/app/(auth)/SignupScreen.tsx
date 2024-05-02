//

// import { Text, View } from "@/components/Themed";
// import React, { useState } from "react";
// import { Image, StyleSheet, TextInput, Button } from "react-native";
// // import { signInWithEmailAndPassword } from "firebase/auth"; /
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { FontAwesome as Icon } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import '@/assets/images/Logo.png';
// import {useRouter} from "expo-router";
//
//
//
// export default function CreateAccount() {
//     const router = useRouter();
//   const [email, onChangeEmail] = React.useState("");
//   const [password, onChangePassword] = React.useState("");
//
//     const auth = getAuth();
//     const createUser = () => {
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             onChangeLoggedInUser(user.email);
//             })
//       .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           });
//     };
//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.label}>Email</Text>
//                 <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeEmail}
//                 value={email}
//                 placeholder="Enter your email"
//                 keyboardType="emai -address"
//                 />,
//             </View>
//             <View>
//                 <Text style={styles.label}>Password</Text>
//                 <TextInput
//                value = {password} 
//                     onChangeText = {onChangePassword}
//                     style={styles.textInput}
//                     placeholder="Enter your password"
//                     secureTextEntry
//                 />
//             </View>
//             <Button title="Sign in Instead" onPress={() => {
//                 router.push("/(auth)/LoginScreen");
//             }} />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     label: {
//         marginBottom: 4,
//         color: "#455fff",
//     },
//     textInput: {
//         width: 250,
//         borderWidth: 1,
//         borderRadius: 4,
//         borderColor: "#455fff",
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         marginBottom: 8,
//     },
// });
//
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccount() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = getAuth();
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Perform any actions you need on successful registration
        console.log('User registered with email:', user.email);
      })
      .catch((error) => {
        console.error('Error code:', error.code, 'Error Message:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>
      <Button title="Create Account" onPress={createUser} />
      <Button title="Sign in Instead" onPress={() => navigation.navigate("LoginScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 4,
    color: "#455a64",
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#455a64",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

