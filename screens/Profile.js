import React, { useContext, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BottomBar from "../components/BottomBar";
import { Context } from "../Store";
import { db } from "../Firebase";
import { query, where, collection, getDocs } from "firebase/firestore";
import { Dimensions } from "react-native";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase";

const Profile = ({ navigation }) => {
  const [store, setStore] = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState();
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    if (image) {
      try {
        const img = await fetch(image);
        const bytes = await img.blob();
        const storageRef = ref(
          storage,
          `${store.user.username}_profile_pic.png`
        );
        await uploadBytes(storageRef, bytes);
        const url = await getDownloadURL(storageRef);
        console.log(url);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleUpdateAvatar = () => {
    pickImage();
    uploadImage();
  };

  useEffect(() => {
    setPosts([]);
    getPosts();
  }, []);

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Text style={styles.username}>{store.user.username}</Text>
      <View style={styles.porfileInfo}>
        <Image
          source={{ uri: store.user.profilePic }}
          style={styles.profilePic}
        />

        <View style={styles.counter}>
          <Text style={styles.count}>{store.user.posts.length}</Text>
          <Text style={styles.label}>Posts</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.count}>{store.user.followers.length}</Text>
          <Text style={styles.label}>Followers</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.count}>{store.user.follows.length}</Text>
          <Text style={styles.label}>Follows</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleUpdateAvatar}>
        <View style={styles.updateCotnainer}>
          <Text style={{ color: "white" }}>Update Avatar</Text>
        </View>
      </TouchableOpacity>
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
              key={post.photo}
            />
          ))}
        </View>
      </ScrollView>
      <BottomBar navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  username: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  porfileInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  counters: {
    display: "flex",
    flexDirection: "row",
  },
  counter: {
    display: "flex",
    alignItems: "center",
    marginHorizontal: 10,
  },
  count: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    color: "white",
    fontSize: 16,
  },
  updateCotnainer: {
    width: 120,
    borderRadius: 5,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    marginLeft: 10,
    marginBottom: 50,
  },
});

export default Profile;
