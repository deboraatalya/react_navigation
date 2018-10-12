import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';
import Biodata from './Biodata';

export default class judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.container}>
			<Biodata/>
			<Image source ={require('./gambar.jpg')} style={{width: 200, height: 200}}/> 
			<Text style = {warna.tata}> Halo Tataa !! </Text>
			<Text style = {salon.tata} > Nama : Debora Atalya Christy</Text>
			<Text style = {salon.tata} > Kelas : XI RPL 2 </Text>
			<Text style = {salon.tata} > SMK TELKOM Purwokerto</Text>
			   <Text style = {{ marginBottom : 100}}></Text>
			   <Button title = " Next " color = "#68098F" onPress = {() => {this.redirect()}}/>
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
	}
});
const warna = {
	tata  : {
		color : "#5B087E",
		fontSize : 20,
		fontWeight : 'bold',
	}
}

const salon = {
	tata : {
		color : "#8B14BC",
		fontSize : 20,
	}
}