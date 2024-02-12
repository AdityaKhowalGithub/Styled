import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#684440', // Highlight color for the active tab
        tabBarInactiveTintColor: '#837B82', // Color for inactive tabs
        tabBarStyle: {
          backgroundColor: '#FFF8ED', // Background color of the navigation bar
        },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      {/* Community Tab */}
      <Tabs.Screen
        name="xommunity"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      {/* Add Tab */}
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      {/* Wardrobe Tab */}
      <Tabs.Screen
        name="Wardrobe"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color }) => <TabBarIcon name="" color={color} />,
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
