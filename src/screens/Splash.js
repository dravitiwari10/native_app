import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
const {height,width} = Dimensions.get('screen')

const Splash = (props) => {
    const [isVisible, setisVisible] = useState(true);
    useEffect(() => {
        setTimeout(function () {
        props.navigation.navigate("CounterScreen");
        setisVisible(false);
        }, 1000);
    }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/splash.png')} style={styles.img}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },img:{
        height:height/1,
        width:width,
        resizeMode:'contain'
    }
})