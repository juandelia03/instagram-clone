import { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  useEffect(()=>{

  })
  return (
    <View style={styles.container}>
      <StatusBar style="auto" barStyle='light-content'/>
        <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  StatusBar:{
    color:'white'
  }
});
