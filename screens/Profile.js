import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import BottomBar from "../components/BottomBar";
import { Context } from "../Store";
import { db } from "../Firebase";
import { query, where, collection, orderBy, getDocs } from "firebase/firestore";
import { Dimensions } from "react-native";
const Profile = ({ navigation }) => {
  const [store, setStore] = useContext(Context);
  const [posts, setPosts] = useState([]);
  const windowWidth = Dimensions.get("window").width;
  const height = windowWidth / 3;

  const getPosts = async () => {
    let items = [];
    const q = query(
      collection(db, "posts"),
      where("username", "==", "juan.delia")
    );
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setPosts(items);
  };

  useEffect(() => {
    setPosts([]);
    getPosts();
    console.log(windowWidth / 3);
  }, []);

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Text>{store.user.username}</Text>
      <ScrollView>
        <View
          style={{
            minHeight: "90%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {posts.reverse().map((post) => (
            <Image
              source={{ uri: post.photo }}
              style={{ width: "33%", height: height }}
            />
          ))}
        </View>
      </ScrollView>
      <BottomBar navigation={navigation} />
    </View>
  );
};

export default Profile;
