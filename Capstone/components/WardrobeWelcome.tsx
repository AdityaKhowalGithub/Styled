// WelcomeSection.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeSection: React.FC = () => (
  <View style={styles.welcomeSection}>
    <Text style={styles.welcomeText}>
      {"Welcome to your digital closet, \nDior Simmons"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  welcomeSection: {
    backgroundColor: "#FFF8ED",
  },
  welcomeText: {
    color: "#000",

    paddingVertical: 21,
    paddingRight: 18,
    marginBottom: 14,
    marginLeft: 32,
    fontSize: 22,
    height: 100,
    marginTop: 20,
    // width: 352,
  },
});

export default WelcomeSection;
