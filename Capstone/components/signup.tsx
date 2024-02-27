// Signup.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Navigate to Home or other component upon success
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
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
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: 'red',
  },
});

export default Signup;
