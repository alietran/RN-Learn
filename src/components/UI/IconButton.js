import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const IconButton = ({name, color, size,onPress}) => {
  return <Pressable style={(pressed)=>[styles.button, pressed && styles.pressed]} onPress={onPress}>
    <Icon name={name} size={size} color={color} />
  </Pressable>
}

export default IconButton

const styles = StyleSheet.create({
    button:{
        padding:8,
        margin:4,
        justifyContent:'center',
        alignItems:'center'
    },
    pressed:{
        opacity: 0.7
    }
})