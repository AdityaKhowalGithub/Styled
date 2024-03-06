import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

// Define the props interface
interface MyScrollViewProps {
  number: number;
}

const HorizontalScrollView: React.FC<MyScrollViewProps> = ({ number }) => {
  // Generate an array with 'number' elements, using the index as a key
  const views = Array.from({ length: number }, (_, index) => (
    <View
      key={index.toString()} // Convert index to string for the key
      style={styles.viewStyle}
    />
  ));

  return (
    <View style={styles.outerStyle}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true} // This enables the horizontal scrollbar
        style={styles.scrollViewStyle}
      >
        {views}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  outerStyle: {
    marginBottom: 8,
    marginHorizontal: 18,
  },
  scrollViewStyle: {
    flexDirection: 'row',
  },
  viewStyle: {
    width: 107,
    height: 140,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginRight: 8,
  },
});

// Correct way to export the component
export default HorizontalScrollView;
