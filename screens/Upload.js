import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BottomBar from "../components/BottomBar";
import * as ImagePicker from "expo-image-picker";
import PostModal from "../components/PostModal";
import { Context } from "../Store";
const Upload = ({ navigation }) => {
  const [state, setState] = useContext(Context);
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
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
  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
      <View style={styles.headerWrap}>
        <Text style={styles.header}>NEW POST</Text>
      </View>
      <PostModal user={state.user} />
      <View style={styles.bottomBar}>
        <BottomBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  bottomBar: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
export default Upload;
