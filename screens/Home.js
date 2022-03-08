import React from "react";
import { ScrollView, View, TouchableWithoutFeedback } from "react-native";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Stories from "../components/Stories";

const Home = ({ navigation }) => {
  let post = {
    username: "bizarap",
    profilePic: require("../assets/biza.jpeg"),
    likes: "2",
    photo: require("../assets/post.jpg"),
    comments: [1, 2, 3],
    caption: "la caption que puso biza",
  };
  return (
    <View style={{ backgroundColor: "black" }}>
      <Navbar />
      <View>
        <Stories />
      </View>
      <ScrollView style={{ marginBottom: 180 }}>
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
      </ScrollView>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <BottomBar navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
