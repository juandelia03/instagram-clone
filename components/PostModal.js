import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PostModal = ({ username, profilePic }) => {
  const [image, setImage] = useState(null);
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

  const [input, setInput] = useState("");
  const onChangeHandler = (event) => {
    setInput(event);
  };

  const post = async () => {
    const post = {
      username: username,
      profilePic: profilePic,
      likes: 0,
      whoLiked: [],
      photo: image,
      comments: [],
      commentsAmount: 0,
      caption: input,
    };
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
        <TouchableOpacity>
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
