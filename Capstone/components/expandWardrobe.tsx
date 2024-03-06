import React from 'react';
import { View, Text, Button } from 'react-native';
import HorizontalScrollView from '@/components/HorizontalView';
import wardrobeItems from '@/components/wardrobe_items.json';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const MyWardrobeScreen: React.FC = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View>
      <Button title="Back" onPress={() => navigation.navigate('Wardrobe')} /> {/* Add this line for the back button */}
      <Text>My Wardrobe</Text>
      <HorizontalScrollView items={wardrobeItems} />
    </View>
  );
};

export default MyWardrobeScreen;