import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { Context } from "../Store";

const Login = ({ navigation }) => {
  const [store, setStore] = useContext(Context);
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("juan@gmail.com");
  const [password, setPassword] = useState("Tiochele");
  const handleGuest = () => {
    setStore({ ...store, user: "Guest" });
    navigation.navigate("Home");
  };

  const getUserInfo = async () => {
    let user;
    const q = query(
      collection(db, "users"),
      where("email", "==", email.toLocaleLowerCase())
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      user = doc.data();
      user = { ...user, id: doc.id };
    });
    return user;
  };

  const handleLogin = async () => {
    const user = await getUserInfo();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setStore({ ...store, user: user });
      navigation.navigate("Home");
    } catch (e) {
      Alert.alert("Error", "Invalid credentials", [{ text: "ok" }]);
    }
  };
  useEffect(() => {
    if (email != "" && password != "") {
      if (active == false) {
        setActive(true);
      }
    } else {
      setActive(false);
    }
  }, [email, password]);
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Image source={require("../assets/logo.png")} style={styles.Loginlogo} />
      <TextInput
        placeholderTextColor={"#545454"}
        placeholder="Email"
        style={styles.authInput}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        placeholderTextColor={"#545454"}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.authInput}
        onChangeText={(e) => setPassword(e)}
      />
      <TouchableOpacity
        style={[
          styles.LoginButton,
          { backgroundColor: active ? "#0095f6" : "#114d79" },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}> Login</Text>
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ color: "gray" }}>Don't have an account yet? |</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "#0095f6" }}> Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleGuest} style={{ marginTop: 10 }}>
        <Text style={{ color: "#0095f6" }}>Take a look as a guest</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  authInput: {
    width: "80%",
    height: 40,
    backgroundColor: "#2c2c2c",
    borderRadius: 5,
    marginVertical: 10,
    paddingLeft: 15,
    color: "white",
  },
  LoginButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  Loginlogo: {
    marginBottom: 0,
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
export default Login;
