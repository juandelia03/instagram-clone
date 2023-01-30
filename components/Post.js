import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Context } from "../Store";
import { db } from "../Firebase";
import {
  getDoc,
  doc,
  where,
  query,
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";
const Post = ({
  username,
  likes,
  whoLiked,
  photo,
  comments,
  commentsAmount,
  caption,
  date,
}) => {
  useEffect(() => {
    getProfilePic();
    getId();
    getLikedStatus();
  }, []);
  const likeActive = require("../assets/likeActive.png");
  const like = require("../assets/like.png");
  const [isLiked, setIsLiked] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [reactiveLike, setReactiveLike] = useState(likes);
  const [id, setId] = useState();
  const [state, setState] = useContext(Context);

  const getProfilePic = async () => {
    const result = await getDoc(doc(db, "users", state.user.id));
    setProfilePic(result.data().profilePic);
  };

  const getId = async () => {
    const q = query(collection(db, "posts"), where("photo", "==", photo));
    const snap = await getDocs(q);
    snap.forEach((doc) => {
      setId(doc.id);
    });
  };

  const getLikedStatus = () => {
    // if (whoLiked.includes(state.user.username)) {
    //   setIsLiked(true);
    // } else {
    //   setIsLiked(false);
    // }
    setIsLiked(whoLiked.includes(state.user.username));
  };

  const handleLike = async () => {
    getId();
    const res = await getDoc(doc(db, "posts", id));
    whoLiked = res.data().whoLiked;
    if (!whoLiked.includes(state.user.username)) {
      try {
        await updateDoc(doc(db, "posts", id), {
          whoLiked: arrayUnion(state.user.username),
          likes: increment(1),
        });
        setReactiveLike(reactiveLike + 1);
        setIsLiked(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      await updateDoc(doc(db, "posts", id), {
        whoLiked: arrayRemove(state.user.username),
        likes: increment(-1),
      });
      setIsLiked(false);
      setReactiveLike(reactiveLike - 1);
    }
    const update = await getDoc(doc(db, "posts", id));
    whoLiked = update.data().whoLiked;
    likes = update.data().likes;
    await getLikedStatus();
    setReactiveLike(likes);
  };

  return (
    <View style={styles.post}>
      <View style={styles.postUser}>
        <Image source={{ uri: profilePic }} style={styles.postProfilePic} />
        <Text style={styles.postUserName}>{username}</Text>
      </View>
      <Image source={{ uri: photo }} style={styles.postPhoto} />
      <View style={styles.postData}>
        <TouchableOpacity onPress={handleLike}>
          <Image
            source={isLiked ? likeActive : like}
            style={{ width: 26, height: 26 }}
          />
        </TouchableOpacity>
        <Text style={styles.postLikes}>{reactiveLike} likes</Text>
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
        <Text style={{ color: "gray", marginBottom: 20 }}>
          {date.toDate().toDateString()}
        </Text>
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
