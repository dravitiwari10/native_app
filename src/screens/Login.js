import { View, Text, StyleSheet, Image, Dimensions, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../component/AppTextInput'
import CommonButton from '../component/CommonButton'
import Loader from '../component/Loader'
import { BASE_URL, EVENT_LIST, SEND_OTP } from '../helper/Config'
const {height,width} = Dimensions.get('screen')
import Md5 from 'md5'
import { ApiRequest } from '../helper'

const Login = (props) => {
    const [loader, setLoader] = useState(false);
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [text, setText] = useState('')
    const [userDetails, setUserDetails] = useState('')

    var encodeVal = Md5(password);
    const onConverMd5 = () =>{

        setPassword(encodeVal);
        console.log('value',encodeVal);
    }
    const LoginUser = async () => {
        
        console.log('password',encodeVal);
        if(password == '' || email == ''){
          Alert.alert('Alert','please complete all the details')
        }else{
          onConverMd5()
          try {
            setLoader(true)
            const url = LOGIN_USER;
            console.log(url)
            // const newFormdata = {email: 'shikharcoach@applination.in',
            // password: "e10adc3949ba59abbe56e057f20f883e"}

            // console.log(JSON.stringify(newFormdata));

            const isFormData = new FormData();
            isFormData.append('data', JSON.stringify( {email: email,
            password: encodeVal})) ;
            console.log('update  body=>', isFormData);
            const res = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
              },
              body: isFormData,
            });
            console.log('register body is consoled', isFormData);
          const data = await res
          .json()
          .then(response => {
            console.log('RESPONSE-Login', response);
            if (response.status == 'success') {
                setLoader(false)
                setUserDetails(response.first_name)
              console.log('response', response.first_name);
              Alert.alert('Alert','Login Successfully Done')
              props.navigation.navigate('LoginSuccess',{userDetails: response.first_name})
            }
          })
            .catch(err => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
        }
        
      };

      const onSubmit = () => {
        // let body = {
        //   "countryCode":"+91",
        //   "mobile":"8492879400",
        //    "coordinates": {
        //       "lat": 0,
        //       "lng": 0
        //   }
        // }
        ApiRequest(EVENT_LIST, 'GET', {authkey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU5MDgxMzVlNjIxOTY0YWMzODU3ODEiLCJtb2JpbGUiOiI2Mzk0MjI1MTg3IiwiZW1haWwiOiJkZXZ1c2VyQG1haWxpbmF0b3IuY29tIiwiaWF0IjoxNjYxMTU4MzA5LCJleHAiOjE2OTI3MTU5MDl9.W-j8nUX-gw-Mv6CsR85iQALjZaU6GSJ7-Fmrv_uTpBw'},body).then(response => {
          if(response.meta.status == true) {
            console.log('data',response.data);
            // navigation.replace(ScreenNames.changePassword, {email: email})
            alert('hello');
            
          }
          else {
            alert('no');
          }
        })
      }
  return (
    <View style={styles.container}>
    <Loader isLoader={loader} />
      <Image source={require('../assets/images/LoginHeader.png')} style={styles.img}/>
      <View style={styles.subContainer}>
        <Text style={styles.titleTxt}>Phone or Email</Text>
        <AppTextInput
        onChange={(txt) => setEmail(txt)}
         placeholder='Enter phone number or email id'/>
        <AppTextInput 
        onChange={(txt) => setPassword(txt)}
        placeholder='Enter your password'/>
        <CommonButton 
        callback={() => onSubmit()}
        title={'LOGIN'} 
        buttonStyle={{marginTop:height/3.2}}/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1
    },img:{
        width:width,
        height:height/12
    },titleTxt:{
        color:'rgba(1,12,57,255)',
        fontSize:20,
        textAlign:'center',
        marginVertical:70
    },subContainer:{
        padding:15,
        flex:1
    },txtInput:{
        borderBottomColor:'grey',
        borderBottomWidth:1,
        textAlignVertical: 'bottom',
    }
})