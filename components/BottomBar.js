import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase";
import { Context } from "../Store";

const BottomBar = ({ navigation }) => {
  useEffect(() => {
    getImage();
  });
  const getImage = async () => {
    if (!state.profilePic) {
      try {
        const storageRef = ref(storage, state.user.profilePic);
        const url = await getDownloadURL(storageRef);
        setProfilePic(url);
        setState({ ...state, profilePic: url });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      setProfilePic(state.profilePic);
    }
  };
  const [profilePic, setProfilePic] = useState(null);
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
          source={
            state.profilePic
              ? {
                  uri: state.profilePic,
                }
              : require("../assets/profile_pic.jpeg")
          }
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
