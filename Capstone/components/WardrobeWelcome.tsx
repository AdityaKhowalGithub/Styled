// WelcomeSection.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeSection: React.FC = () => (
  <View style={styles.welcomeSection}>
    <Text style={styles.welcomeText}>
      {"Welcome to your digital closet, \nJohn Doe"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  welcomeSection: {
    backgroundColor: '#FFF8ED',
    paddingVertical: 21,
    paddingRight: 18,
    marginBottom: 14,
    marginLeft: 32,
  },
  welcomeText: {
    color: '#000',
    fontSize: 22,
    marginBottom: 16,
    marginLeft: -12, // Adjust based on marginLeft of parent
    width: 352,
  },
});

export default WelcomeSection;
