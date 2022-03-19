import React, { useEffect, useContext, useState } from "react";
import { ScrollView, View, SafeAreaView, RefreshControl } from "react-native";
import { Context } from "../Store";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Stories from "../components/Stories";
import { db } from "../Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import NativeAsyncLocalStorage from "react-native/Libraries/Storage/NativeAsyncLocalStorage";
const Home = ({ navigation }) => {
  const [state, setState] = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setPosts([]);
    await getPosts();
    setRefreshing(false);
  };

  useEffect(() => {
    console.log(state);
    getPosts();
  }, []);

  const getPosts = async () => {
    let items = [];
    const q = query(collection(db, "posts"), orderBy("date"));
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setPosts(items);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
      <Navbar />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ maxHeight: "85%" }}
      >
        <Stories />
        {posts.reverse().map((post) => (
          <Post
            username={post.username}
            profilePic={post.profilePic}
            likes={post.likes}
            whoLiked={post.whoLiked}
            photo={post.photo}
            comments={post.comments}
            commentsAmount={post.comments.length}
            caption={post.caption}
            date={post.date}
            key={post.photo}
          />
        ))}
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
      <View
        style={{
          flex: 1,
        }}
      >
        <BottomBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
