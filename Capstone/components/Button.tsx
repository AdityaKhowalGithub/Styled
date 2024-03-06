// Button.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, backgroundColor }) => (
  <View style={[styles.buttonContainer, { backgroundColor }]}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: 166,
    borderRadius: 5,
    paddingVertical: 9,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});

export default Button;
