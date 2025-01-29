import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../colors'
import ImagePicker from './ImagePicker'

const PlaceForm = () => {
  const [enteredText, setEnteredText] = useState('')

  const changeEnteredText = (enteredText) => {
    setEnteredText(enteredText);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChange={changeEnteredText} value={enteredText} />
      </View>
      <ImagePicker />
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
  form:{
    flex: 1,
    padding : 24
  },
  label:{
    fontWeight:'bold',
    marginBottom:4,
    color: Colors.primary500
  },
  input:{
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize:36,
    borderBottomColor:Colors.primary700,
    borderBottomWidth:2,
    backgroundColor:Colors.primary100
  }
})