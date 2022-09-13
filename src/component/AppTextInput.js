import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const AppTextInput = ({
    placeholder = '',
    onChange,
  }) => {
  return (
    <TextInput
    placeholder={placeholder}
    onChangeText={onChange} style={styles.txtInput}/>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    txtInput:{
        borderBottomColor:'grey',
        borderBottomWidth:1,
        textAlignVertical: 'bottom',
        marginBottom:20
    }
})