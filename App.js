import { useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import Post from './components/Post';

export default function App() {
  useEffect(()=>{

  })
  return (
    <View style={styles.container}>
      <StatusBar style="auto" barStyle='light-content'/>
      <View>
        <Navbar/>
        <ScrollView>
          <Post/>
          <Post/>
          <Post/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'black',
    justifyContent:'flex-start',
    paddingHorizontal:0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
