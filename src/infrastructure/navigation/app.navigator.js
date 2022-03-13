import React from "react";
import { Entypo } from "@expo/vector-icons";

import { MapScreen } from "../../features/screens/MapScreen/MapScreen";
import { SettingsScreen } from "../../features/screens/SettingsScreen/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";

import { InstallationsNavigator } from "./routes/installations.navigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color = "black", size = 40 }) => {
            if (route.name === "Base Camps") {
              return <Entypo name="basecamp" size={size} color={color} />;
            } else if (route.name === "Map") {
              return <Entypo name="map" size={size} color={color} />;
            } else if (route.name === "Settings") {
              return <Entypo name="cog" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Base Camps" component={InstallationsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
