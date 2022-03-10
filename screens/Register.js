import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context } from "../store";
const Register = ({ navigation }) => {
  const [state, setState] = useContext(Context);
  const [active, setActive] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (email != "" && password != "" && user != "") {
      if (active == false) {
        setActive(true);
      }
    } else {
      setActive(false);
    }
  }, [email, password, user]);
  return (
    <SafeAreaView style={styles.loginContainer}>
      <Image source={require("../assets/logo.png")} style={styles.Loginlogo} />
      <TextInput
        placeholderTextColor={"#545454"}
        placeholder="Username"
        style={styles.authInput}
        onChangeText={(e) => setUser(e.toLocaleLowerCase())}
      />
      <TextInput
        placeholderTextColor={"#545454"}
        placeholder="Email"
        style={styles.authInput}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        placeholderTextColor={"#545454"}
        placeholder="Password"
        style={styles.authInput}
        onChangeText={(e) => setPassword(e)}
      />
      <TouchableOpacity
        style={[
          styles.LoginButton,
          { backgroundColor: active ? "#0095f6" : "#114d79" },
        ]}
      >
        <Text style={styles.loginText}> Register</Text>
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ color: "gray" }}>Already have an account? |</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#0095f6" }}> Login </Text>
        </TouchableOpacity>
      </View>
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
export default Register;