import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import { GET_POSTS } from '../helper/Config'
import { useState } from 'react'
import * as ApiClient from '../helper/index';

const Home = () => {
    const [list, setList] = useState('')
    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        try {
            const endUrl = GET_POSTS
            let metaInfo = await ApiClient.ApiRequest(endUrl);
            setList(metaInfo)
        } catch (error) {
            console.log(error);
        }

    }

    const onDeletePost = async(id)=> {
        try {
            const endUrl = GET_POSTS + '/' + id
            let method ='DELETE'
            let metaInfo = await ApiClient.ApiRequest(endUrl,method);
                let arry = [...list]
                let modifyArray = arry.filter((val,i)=>{
                    if(val.id !== id){
                        return val
                    }
                })
                setList(modifyArray)
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
      <View>
          <FlatList
              data={list}
              renderItem={({ item }) => {
                  return (
                      <View style={styles.card}>
                          <Text>{item.id} .</Text>
                          <Text>{item.title}</Text>
                          <TouchableOpacity onPress={() => onDeletePost(item.id)}
                          style={styles.btn}>
                              <Text style={{ color: 'white' }}>DELETE</Text>
                          </TouchableOpacity>
                      </View>
                  )
              }} />
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
    card:{
        margin:10,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        padding:10
    },btn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        height:30,
        width:100,
        borderRadius:5,
        marginTop:5
    }
})