import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Entypo, Ionicons } from "@expo/vector-icons";

import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MilitaryBaseScreen } from "./src/features/installations/screens/military-base.screen";
import { theme } from "./src/infrastructure/theme";

import { installationsRequest } from "./src/services/installations/installations.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

function HomeScreen() {
  return <MilitaryBaseScreen />;
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Who do we ask for help when we don't know which way to go?</Text>
      <Text>You have to say, 'Map'.</Text>
      <Text>Say 'Map'! Say 'Map'!</Text>
      <Text>Louder!</Text>
      <Text>I think you have to say it again</Text>
      <Text>
        Hmmm...I guess the Google Maps API isn't plugged in...where's Dustin?
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular }),
    [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color = "black", size = 40 }) => {
                let iconName;
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
            <Tab.Screen name="Base Camps" component={HomeScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
