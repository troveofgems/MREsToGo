import React from "react";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MapScreen } from "../../screens/Map.screen";
import { SettingsScreen } from "../../screens/Settings.screen";
import { MilitaryBaseStackNavigator } from "./routes/militaryBase.stack-navigator";

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator(),
    setTabOptions = (route) => ({
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
    });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => setTabOptions(route)}>
        <Tab.Screen name="Base Camps" component={MilitaryBaseStackNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
