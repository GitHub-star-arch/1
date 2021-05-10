//All that imports exports everything like that
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'

export default class Details extends React.Component {

  render() {
    return (
      <View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
      backgroundColor: "coral",
      borderWidth: 5,
      width: 100,
      height: 40,
      marginTop: 10,
      borderColor: "blue",
  },
})