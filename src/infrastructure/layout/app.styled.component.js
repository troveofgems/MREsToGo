import styled from "styled-components";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import MapView from "react-native-maps";
import WebView from "react-native-webview";

// Generic Device Helpers
/******************************/
export const isAndroidDevice = Platform.OS === "android"; // SafeView is iOS only.
export const deviceSafetyMargin = isAndroidDevice ? StatusBar.currentHeight : 0; // SafeView is iOS only.

export const ActivityIndicatorContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// Home Screen Styled Components
/******************************/
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${deviceSafetyMargin}px`};
`;

export const SearchArea = styled(View)`
  background-color: green;
  padding: 16px;
`;

export const ListArea = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

// Map Screen Styled Components
/******************************/
export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreenSearchContainer = styled(View)`
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 999;
`;

// Compact Base Screen Styled Components
/****************************************/
export const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

// Fix issue with Android Image Render
export const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
