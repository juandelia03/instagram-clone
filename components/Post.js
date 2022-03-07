import React from 'react'
import { Image, StyleSheet, Text, View, } from 'react-native'

const Post = () => {
    return (
      <View style={styles.post}>
          <View style={styles.postUser}>
             <Image source={require('../assets/biza.jpeg')} style={styles.postProfilePic}/>
             <Text style={styles.postUserName}>bizarap</Text>
          </View>
          <Image source={require('../assets/post.jpg')} style={styles.postPhoto}/>
      </View>
  )
}
const styles = StyleSheet.create({
    postUserName:{
      color:'white',
      marginLeft:10,
      fontWeight:'bold'
    },
    postProfilePic:{
        width:32,
        height:32,
        borderRadius:20
    },
    post:{

    },
    postUser:{
        display:'flex',
        // flex:2,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,

    },
    postPhoto:{
        marginTop:20,
        width:'100%',
        height:500
    }
})

export default Post