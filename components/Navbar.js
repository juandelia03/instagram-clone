import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
        <Image source={require('../assets/logo.png')}  />
        <Image source={require('../assets/biza.jpeg')} style={styles.profilePic}/>
    </View>
  )
}
const styles = StyleSheet.create({
    navbarContainer:{
        flex:1,
        flexDirection:'row',
        minHeight:100,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'black',
        paddingTop: Platform.OS == 'ios' ? 30:0,
        paddingHorizontal:20,
    },
    profilePic:{
        width:40,
        height:40,
        borderRadius:30
    }
})

export default Navbar