// DigitalCloset.tsx
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import WelcomeSection from './WelcomeSection';
import SummaryContainer from './SummaryContainer';

const DigitalCloset: React.FC = () => {
  const navigateToAddPiece = () => {
    console.log('Navigate to add');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <WelcomeSection />
        <SummaryContainer />
        <View style={styles.buttonsRow}>
          <Button title="add a piece" onPress={navigateToAddPiece} backgroundColor="#A86154" />
          <Button title="add an outfit" onPress={() => console.log('Add outfit')} backgroundColor="#A4763B" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonsRow: {
    flexDirection
// DigitalCloset.tsx
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import WelcomeSection from './WelcomeSection';
import SummaryContainer from './SummaryContainer';

const DigitalCloset: React.FC = () => {
  const navigateToAddPiece = () => {
    console.log('Navigate to add');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <WelcomeSection />
        <SummaryContainer />
        <View style={styles.buttonsRow}>
          <Button title="add a piece" onPress={navigateToAddPiece} backgroundColor="#A86154" />
          <Button title="add an outfit" onPress={() => console.log('Add outfit')} backgroundColor="#A4763B" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 18,
  },
});

export default DigitalCloset;
