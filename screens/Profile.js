import React from "react";
import { View } from "react-native";
import BottomBar from "../components/BottomBar";

const Profile = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={{ flex: 1 }}>
        <BottomBar navigation={navigation} />
      </View>
    </View>
  );
};

export default Profile;
