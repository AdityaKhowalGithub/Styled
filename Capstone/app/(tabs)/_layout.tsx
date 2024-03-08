import React, { useState, useEffect } from 'react';
import { Text, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabIcon from '@/components/tabBarIcons';
// Custom hook to get window dimensions
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    function handleChange() {
      setWindowDimensions(Dimensions.get('window'));
    }

    const dimensionsListener = Dimensions.addEventListener('change', handleChange);

    return () => dimensionsListener.remove();
  }, []);

  return windowDimensions;
}




// Main TabLayout component
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions(); // Get the current window width
  const shouldHideLabels = width < 320; 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#684440', // Highlight color for the active tab
        tabBarInactiveTintColor: '#837B82', // Color for inactive tabs
        tabBarStyle: {
          backgroundColor: '#FFF8ED', // Background color of the navigation bar
        },
        tabBarShowLabel: !shouldHideLabels, // Dynamically show/hide labels based on width
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabIcon name="home" color={color} />,
        }}
      />
      {/* Community Tab */}
      <Tabs.Screen
        name="Communities"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <TabIcon name="communities" color={color} />,
        }}
      />
      {/* Add Tab */}
      <Tabs.Screen
        name="add"
        options={{
          
          tabBarIcon: ({ color }) => <TabIcon name="add" color={color} />,
          tabBarLabel : () => {return <Text style={{fontSize: 0}}></Text>}
        
        }}
      />
      {/* Wardrobe Tab */}
      <Tabs.Screen
        name="Wardrobe"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color }) => <TabIcon name="wardrobe" color={color} />,
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabIcon name="profile" color={color} />,
        }}
      />
    </Tabs>
  );
}
