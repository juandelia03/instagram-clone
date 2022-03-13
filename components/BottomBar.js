import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Context } from "../Store";

const BottomBar = ({ navigation }) => {
  const [state, setState] = useContext(Context);
  const routesHandler = (e) => {
    navigation.navigate(e);
  };
  return (
    <View style={styles.BottomBar}>
      <TouchableWithoutFeedback onPress={() => routesHandler("Home")}>
        <Image source={require("../assets/home.png")} style={styles.icon} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => routesHandler("Upload")}>
        <Image source={require("../assets/newIcon.png")} style={styles.icon} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => routesHandler("Profile")}>
        <Image
          source={{ uri: state.user.profilePic }}
          style={[styles.icon, { borderRadius: 20 }]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  BottomBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "black",
  },
  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
  },
});

export default BottomBar;
