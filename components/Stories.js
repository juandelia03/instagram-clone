import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import Storie from "../components/Storie";
const Stories = () => {
  return (
    <>
      <ScrollView
        horizontal={true}
        style={{
          marginHorizontal: 20,
        }}
      >
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
      </ScrollView>
      <View
        style={{
          marginVertical: 10,
          borderWidth: 0.5,
          borderBottomColor: "#A9A9A9",
        }}
      />
    </>
  );
};

export default Stories;
