import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Platform, StyleSheet, View, SafeAreaView } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <Image source={require("../assets/logo.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: "row",
    minHeight: 60,
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 15,
  },
});

export default Navbar;
