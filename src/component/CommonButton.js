import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CommonButton = ({title, callback,buttonStyle,titleStyle}) => {
  return (
    <TouchableOpacity style={{...styles.container,...buttonStyle}} onPress={callback}>
      <Text style={{...styles.title,...titleStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 20,
    height: 40,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    fontWeight:'600'
  }
})