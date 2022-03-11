import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Upload from "./screens/Upload";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Store from "./Store";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Store>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Upload" component={Upload} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Store>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
  },
});
export default App;
