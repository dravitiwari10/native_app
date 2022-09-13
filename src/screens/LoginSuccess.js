import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoginSuccess = (props) => {
    let preData = props.route?.params?.userDetails
    console.log('user',preData);
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome {preData}</Text>
    </View>
  )
}

export default LoginSuccess

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },txt:{
        fontSize:30,
        fontWeight:'700',
        color:'rgba(1,12,57,255)'
    }
})