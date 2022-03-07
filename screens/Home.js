import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Navbar />
      <View>
        <Stories />
      </View>
      <ScrollView>
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;
