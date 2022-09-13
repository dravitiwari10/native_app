import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import {increment,decrement} from '../redux/actions/action'
import {useDispatch,useSelector} from 'react-redux'

const CounterScreen = () => {
    // console.log('store value',store.getState());
    // const [number, setNumber] = useState(0)
    const number = useSelector((state) => state.num)
     const dispatch = useDispatch()

    // useEffect(() => {
    //     const unsubs = store.subscribe(() =>{
    //         let value = store.getState().num
    //         setNumber(value)
    //         return unsubs
    //     })
    // }, [])

    
    

    const onAdd = () =>{
        dispatch(increment(number))
    }
    const onMinus = () =>{
        dispatch(decrement(number))
    }

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={onAdd}>
    <Text>+</Text>
    </TouchableOpacity>
      <Text>{number}</Text>
    <TouchableOpacity disabled={number == 1}
    onPress={onMinus}>
    <Text>-</Text>
    </TouchableOpacity>
    </View>
  )
}

export default CounterScreen