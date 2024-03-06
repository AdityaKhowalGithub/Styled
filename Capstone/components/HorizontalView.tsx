import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

// Define the props interface
interface MyScrollViewProps {
  items: Array<{ "Item Number": string; "Image Filename": string; }>;
}

const HorizontalScrollView: React.FC<MyScrollViewProps> = ({ items }) => {
  // Generate views based on the items prop
  const views = items.map((item, index) => (
    <View
      key={index.toString()} // Convert index to string for the key
      style={styles.viewStyle}
    >
      <Image source={{ uri: item["Image Filename"] }} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
    </View>
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
