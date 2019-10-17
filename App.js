import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  myButtonPressed(){
    Alert.alert("Back Ground chnaged");

  }

  render(){
    return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={this.myButtonPressed}>
      <View style = {styles.text}>
      <Text style ={{color: "#ffff"}}>Click Me</Text>
      </View>
      </TouchableOpacity>
      
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10

  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15
  },

});
