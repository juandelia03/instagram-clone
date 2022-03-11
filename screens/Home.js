import React, { useEffect, useContext } from "react";
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { Context } from "../Store";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Stories from "../components/Stories";
const Home = ({ navigation }) => {
  const [state, setState] = useContext(Context);
  useEffect(() => {
    console.log(state);
  });

  let post = {
    username: "bizarap",
    profilePic: require("../assets/biza.jpeg"),
    likes: "2",
    photo: require("../assets/post.jpg"),
    comments: [1, 2, 3],
    caption: "la caption que puso biza",
  };
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <Navbar />
      <ScrollView>
        <Stories />
        <Post
          username={post.username}
          profilePic={post.profilePic}
          likes={post.likes}
          photo={post.photo}
          comments={post.comments}
          commentsAmount={post.comments.length}
          caption={post.caption}
        />
        <Post
          username={post.username}
          profilePic={post.profilePic}
          likes={post.likes}
          photo={post.photo}
          comments={post.comments}
          commentsAmount={post.comments.length}
          caption={post.caption}
        />
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <BottomBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
