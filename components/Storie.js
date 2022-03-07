import React from "react";
import { View, Image, Text } from "react-native";

const Storie = () => {
  return (
    <View style={{ paddingRight: 15 }}>
      <Image
        source={require("../assets/biza.jpeg")}
        style={{
          width: 62,
          height: 62,
          borderRadius: 50,
          borderColor: "#FD1D1D",
          borderWidth: 2,
        }}
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 12,
          marginTop: 3,
        }}
      >
        bizarap
      </Text>
    </View>
  );
};

export default Storie;
