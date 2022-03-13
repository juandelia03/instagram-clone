import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Context } from "../Store";
const Post = ({
  username,
  profilePic,
  likes,
  photo,
  comments,
  commentsAmount,
  caption,
}) => {
  const likeActive = require("../assets/likeActive.png");
  const like = require("../assets/like.png");
  const [state, setState] = useContext(Context);
  return (
    <View style={styles.post}>
      <View style={styles.postUser}>
        <Image source={profilePic} style={styles.postProfilePic} />
        <Text style={styles.postUserName}>{username}</Text>
      </View>
      <Image source={{ uri: photo }} style={styles.postPhoto} />
      <View style={styles.postData}>
        <TouchableOpacity>
          <Image source={like} style={{ width: 26, height: 26 }} />
        </TouchableOpacity>
        <Text style={styles.postLikes}>{likes} likes</Text>
        <View style={styles.caption}>
          <Text style={{ color: "white", fontWeight: "bold" }}>{username}</Text>
          <Text style={{ color: "white", marginLeft: 5 }}>{caption}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "gray", marginVertical: 3 }}>
            Read the {commentsAmount} comments
          </Text>
        </TouchableOpacity>
        <View style={styles.commentsView}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              source={{ uri: state.user.profilePic }}
              style={styles.postProfilePic}
            />
            <TextInput
              style={{ marginLeft: 10, color: "white" }}
              placeholder={"add a comment"}
              placeholderTextColor={"gray"}
            />
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#0095f6" }}>Publish</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "gray", marginBottom: 20 }}>1 Hour Ago</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postUserName: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  postProfilePic: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  post: {},
  postUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  postPhoto: {
    marginTop: 10,
    width: "100%",
    height: 500,
  },
  postData: { paddingHorizontal: 15, marginTop: 10 },
  postLikes: {
    marginTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    display: "flex",
    flexDirection: "row",
  },
  commentsView: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Post;
