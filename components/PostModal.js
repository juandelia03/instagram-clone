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

const PostModal = () => {
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

  const onChangeHandler = (event) => {
    setInput(event);
  };
  const [input, setInput] = useState("");
  return (
    <View style={styles.modalContainer}>
      <View style={{ display: "flex", alignItems: "center" }}>
        <View style={{ backgroundColor: "#404040", width: 150, height: 150 }}>
          <Image
            source={
              image ? { uri: image } : require("../assets/placeholderImage.png")
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
});

export default PostModal;
