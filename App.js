import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";

const isAndroidDevice = Platform.OS === "android";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeSearch = (query) => setSearchTerm(`${query}`);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchTerm}
        />
      </View>
      <View style={styles.list}>
        <Text>App Body</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroidDevice ? StatusBar.currentHeight : 0,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});
