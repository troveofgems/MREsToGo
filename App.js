import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import loadFontsToApp from "./src/infrastructure/theme/loadFonts";
import { theme } from "./src/infrastructure/theme";

import { InstallationsContextProvider } from "./src/services/installations/installations.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  loadFontsToApp();
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <InstallationsContextProvider>
              <Navigation />
            </InstallationsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
