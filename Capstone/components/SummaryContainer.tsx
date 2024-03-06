// SummaryContainer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryContainer: React.FC = () => (
  <View style={styles.summaryContainer}>
    <Text style={styles.summaryText}>
      {"You have 40 total pieces."}
    </Text>
    <View style={styles.piecesContainer}>
      <Text style={styles.pieceText}>{"20 tops"}</Text>
      <Text style={styles.pieceText}>{"20 bottoms"}</Text>
      <Text style={styles.pieceText}>{"10 dresses"}</Text>
      <Text style={styles.pieceText}>{"5 shoes"}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingTop: 35,
    paddingBottom: 24,
    marginLeft: -10, // Adjust based on parent marginLeft
  },
  summaryText: {
    color: '#000',
    fontSize: 18,
    marginBottom: 16,
    marginHorizontal: 23,
  },
  piecesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 7,
  },
  pieceText: {
    color: '#000',
    fontSize: 15,
  },
});

export default SummaryContainer;
