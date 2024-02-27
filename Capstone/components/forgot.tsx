import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleResetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setMessage('Check your email to reset your password.');
    } catch (error: any) {
      if (error instanceof firebase.FirebaseError) {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
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
      <Button title="Reset Password" onPress={handleResetPassword} />
      {message ? <Text>{message}</Text> : null}
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
});

export default Forgot;
