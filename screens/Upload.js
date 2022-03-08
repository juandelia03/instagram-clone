import React from "react";
import { View, Text } from "react-native";
import BottomBar from "../components/BottomBar";

const Upload = ({ navigation }) => {
  return (
    <View>
      <Text>Upload</Text>
      <View style={{ flex: 1 }}>
        <BottomBar navigation={navigation} />
      </View>
    </View>
  );
};

export default Upload;
