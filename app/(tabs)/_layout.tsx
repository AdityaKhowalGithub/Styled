import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Text } from "react-native";
import { Home2 } from 'iconsax-react-native';
import { PeopleCommunityRegular, PeopleCommunityFilled } from "@fluentui/react-native-icons";
import Addicon from "@/components/addicon";

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
      Dimensions.get("window"),
  );

  useEffect(() => {
      function handleChange() {
          setWindowDimensions(Dimensions.get("window"));
      }

      const dimensionsListener = Dimensions.addEventListener(
          "change",
          handleChange,
      );

      return () => dimensionsListener.remove();
  }, []);

  return windowDimensions;
}

// Main TabLayout component
export default function TabLayout() {
  const { width } = useWindowDimensions(); // Get the current window width
  const shouldHideLabels = width < 320;

  return (
      <Tabs
          screenOptions={{
              headerShown: false, // Hide the header
              tabBarActiveTintColor: "#00321F", // Highlight color for the active tab
              tabBarInactiveTintColor: "#717B77", // Color for inactive tabs
              tabBarStyle: {
                  backgroundColor: "#FFFFFF", // Background color of the navigation bar
              },
              tabBarShowLabel: !shouldHideLabels, // Dynamically show/hide labels based on width
              
          }}
      >
          <Tabs.Screen
              name="index"
              options={{
                  title: "Home",
                  tabBarIcon: ({ focused, color }) => (
                    <Home2 size={24} color={color} variant={focused ? "Bold" : "Outline"} />
                  ),
              }}
          />
          <Tabs.Screen
              name="Communities"
              options={{
                  title: "Community",
                  tabBarIcon: ({ focused, color }) => (
                      <MaterialIcons
                          name={focused ? "people" : "people-outline"}
                          size={30}
                          color={color}
                      />
                  ),
              }}
          />
     <Tabs.Screen
              name="add"
              options={{
                  tabBarIcon: ({ focused, color }) => (
                    <Addicon/>
                  ),
                  tabBarLabel: () => {
                      return <Text style={{ fontSize: 0 }}></Text>;
                  },
              }}
          />   
          <Tabs.Screen
              name="Wardrobe"
              options={{
                  title: "Wardrobe",
                  tabBarIcon: ({ focused, color }) => (
                      <MaterialCommunityIcons
                          name={focused ? "wardrobe" : "wardrobe-outline"}
                          size={30}
                          color={color}
                      />
                  ),
              }}
          />  
          <Tabs.Screen
              name="profile"
              options={{
                  title: "Profile",
                  tabBarIcon: ({ focused, color }) => (
                      <MaterialIcons
                          name={focused ? "person" : "person-outline"}
                          size={30}
                          color={color}
                      />
                  ),
              }}
          />
      </Tabs>

  );
}
