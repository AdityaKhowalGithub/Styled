import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import {
    AntDesign,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Text } from "react-native";
import { View } from "react-native";
// Custom hook to get window dimensions
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
                tabBarActiveTintColor: "#684440", // Highlight color for the active tab
                tabBarInactiveTintColor: "#837B82", // Color for inactive tabs
                tabBarStyle: {
                    backgroundColor: "#FFF8ED", // Background color of the navigation bar
                },
                tabBarShowLabel: !shouldHideLabels, // Dynamically show/hide labels based on width
                headerShown: useClientOnlyValue(false, true),
            }}
        >
            {/* Home Tab */}
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? "home" : "home-outline"}
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
            {/* Community Tab   */}
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
            {/* Add Tab              <Tabs.Screen
                name="add"
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <AntDesign
                            name={focused ? "pluscircle" : "pluscircleo"}
                            size={34}
                            style={{ marginTop: 2 }}
                            color={color}
                        />
                    ),
                    tabBarLabel: () => {
                        return <Text style={{ fontSize: 0 }}></Text>;
                    },
                }}
            /> */}


            {/* Wardrobe Tab */}      <Tabs.Screen
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


            {/* Profile Tab    */}         <Tabs.Screen
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
