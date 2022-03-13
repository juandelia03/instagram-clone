import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  arrayUnion,
  updateDoc,
  doc,
} from "firebase/firestore";
import { storage } from "../Firebase";
import { db } from "../Firebase";
const PostModal = ({ profilePic, user }) => {
  useEffect(() => {
    console.log(user);
  });
  const [image, setImage] = useState(null);
  const [input, setInput] = useState("");
  let uniqueId = null;
  const onChangeHandler = (event) => {
    setInput(event);
  };

  const random = () => {
    return (
      new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
    );
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
        uniqueId = await random();
        const storageRef = ref(storage, `${user.username}/${uniqueId}.jpg`);
        await uploadBytes(storageRef, bytes);
        url = await getDownloadURL(storageRef);
        console.log(url);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const addReference = async (post) => {
    try {
      const result = await addDoc(collection(db, "posts"), post);
      await updateDoc(doc(db, "users", user.id), {
        posts: arrayUnion(result.id),
      });
    } catch (e) {
      console.log(e);
    }
  };
  const post = async () => {
    const post = {
      username: user.username,
      profilePic: user.profilePic,
      likes: 0,
      whoLiked: [],
      photo: url,
      comments: [],
      commentsAmount: 0,
      caption: input,
      date: new Date(),
    };
    try {
      await uploadImage();
      post.photo = url;
      await addReference(post);
      console.log("done");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <View style={styles.modalContainer}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <View style={{ backgroundColor: "#404040", width: 150, height: 150 }}>
            <Image
              source={
                image
                  ? { uri: image }
                  : require("../assets/placeholderImage.png")
              }
              style={{ width: 150, height: 150 }}
            />
          </View>
          <TouchableOpacity onPress={pickImage}>
            <Text style={{ color: "#0095f6", marginTop: 10 }}>
              Select an Image
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.captionInput}
          placeholder={"Your caption..."}
          placeholderTextColor={"gray"}
          onChangeText={onChangeHandler}
          defaultValue={input}
        />
      </View>
      <View style={styles.postButtonWrap}>
        <TouchableOpacity onPress={post}>
          <Text style={image ? styles.postButtonActive : styles.postButton}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },
  captionInput: {
    color: "white",
    marginBottom: "auto",
    marginLeft: 20,
    marginTop: 20,
  },
  postButtonWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  postButton: {
    color: "gray",
  },
  postButtonActive: {
    color: "#0095f6",
  },
});

export default PostModal;
