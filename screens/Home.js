import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

const Home = () => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Navbar />
      <ScrollView>
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;
