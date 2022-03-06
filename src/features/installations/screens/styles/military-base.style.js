import styled from "styled-components";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

const isAndroidDevice = Platform.OS === "android",
  deviceSafetyMargin = isAndroidDevice ? StatusBar.currentHeight : 0; // SafeView is iOS only.

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
