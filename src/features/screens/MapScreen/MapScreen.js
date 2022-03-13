import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { Search } from "../../search/Search";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 999,
  },
});

export function MapScreen() {
  return (
    <>
      <View style={styles.searchContainer}>
        <Search placeholder={"Search the World"} />
      </View>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </>
  );
}
