import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Post = () => {
  const likeActive = require("../assets/likeActive.png");
  const like = require("../assets/like.png");
  return (
    <View style={styles.post}>
      <View style={styles.postUser}>
        <Image
          source={require("../assets/biza.jpeg")}
          style={styles.postProfilePic}
        />
        <Text style={styles.postUserName}>bizarap</Text>
      </View>
      <Image source={require("../assets/post.jpg")} style={styles.postPhoto} />
      <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
        <TouchableOpacity>
          <Image source={like} style={{ width: 26, height: 26 }} />
        </TouchableOpacity>
        <Text style={styles.postLikes}>10 likes</Text>
        <View style={styles.caption}>
          <Text style={{ color: "white", fontWeight: "bold" }}>bizarap</Text>
          <Text style={{ color: "white", marginLeft: 5 }}>
            la caption que puso el biza
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "gray", marginVertical: 3 }}>
            Read the 5 comments
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginVertical: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/biza.jpeg")}
            style={styles.postProfilePic}
          />
          <TextInput
            style={{ marginLeft: 10, color: "white" }}
            placeholder={"add a comment"}
            placeholderTextColor={"gray"}
          />
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
  postLikes: {
    marginTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Post;
