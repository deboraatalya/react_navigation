import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,Button,Image,TouchableOpacity,Alert } from 'react-native';

export default class login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source ={require('./m.jpg')} style={{width: 100, height: 100}}/>   
      <TextInput
        style = {styles.inputBox}
        placeholder = "Telepon atau email"
      />
        <TextInput
         style = {styles.inputBox}
        placeholder = "Password"
        secureTextEntry = {true}
      />
      <Button
         onPress = {() => {this.props.navigation.navigate('judul')}}
         style = {styles.button}
         title = " login  "
         color = "#3A95BE"
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#F3D5FF',
  },

  inputBox : {
    width : 250,
    fontSize : 13,
    color : 'black'
  },
  button : {
    width : 250,
    height : 40,
    alignItems : 'center',
    backgroundColor : '#3B5998',
    marginVertical : 10,
    paddingHorizontal : 60,
  flexDirection : 'row',
  justifyContent : 'space-between'
  }
});