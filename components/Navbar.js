import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Platform, StyleSheet, View,SafeAreaView } from 'react-native'

const Navbar = () => {
  return (
    
    <View style={styles.navbarContainer}>
        <Image source={require('../assets/logo.png')}  />
    </View>
  )
}
const styles = StyleSheet.create({
    navbarContainer:{
        flex:1,
        flexDirection:'row',
        minHeight:60,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'black',
        paddingHorizontal:15,

    },
    profilePic:{
        width:40,
        height:40,
        borderRadius:30
    }
})

export default Navbar