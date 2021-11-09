
import React, { Component } from 'react';
import { 
  Text, ScrollView, ImageBackground,
   Dimensions,View,StyleSheet,TextInput,
   onChangeText,text,TouchableOpacity,onPress,color,placeholder } from 'react-native';
import SignUp from './SignUp'



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex:1,backgroundColor:'#ffff'}}showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('./assent/img.png')}
        style={{height:Dimensions.get('window').height/2.5,}}>
          <View style={styles.barndView}>
            <Text style={styles.brandViewText}>Furniture Lanka</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomView}>
          <View style={{padding:30}}>
            <Text style={{color:'#4632A1',fontSize:34}}>Welcome to Login</Text>
            
            
            <View style={{marginTop:50}}>
            <TextInput style={styles.input} onChangeText={onChangeText}value={text}  placeholder="Username" placeholderTextColor="#000000"/>
            <TextInput style={styles.input} onChangeText={onChangeText}value={text} placeholder="Password" placeholderTextColor="#000000"/>
            {/* <TouchableOpacity style={styles.button} onPress={this.onPress}><Text style={{color:'#fffff',fontSize:25,fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity> */}
       
       <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('SignUp')}} style={{top: '40%',left:'33%',width:150}}><Text style={{color:'#4632A1',fontSize:18,marginLeft:0}}>Register Now</Text></TouchableOpacity>
       
        <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Product')}}  style={{
                  //  marginTop:'5%',
                  width:250,
                  height:40,
                  left:45,
                  borderRadius:30,
                  backgroundColor:'#4632A1',
                  alignItems:'center',
                  justifyContent:'center',  
              }                  
              }
              // <Text style={{color:'#4632A1',fontSize:18}}>Register now</Text>
><Text style={{fontSize:25,color:'#fffff',fontWeight:'bold'}}>Login</Text></TouchableOpacity>

<Text style={{color:'#4632A1',fontSize:20,left:'22%',marginTop:5}}>Dont't Have an account?</Text>
            </View>
            
          
          </View>
          
        </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  barndView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  brandViewText:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
    textTransform:'uppercase',
  },
  bottomView:{
    flex:1.5,
    backgroundColor:'#ffff',
    bottom:40,
    borderTopStartRadius:60,
    borderTopEndRadius:60,
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius:30,
    
  },
  // button: {
  //   height: 40,
  //   alignItems: "center",
  //   justifyContent:'center',
  //   padding: 25,
  //   marginLeft:20,
  //   width:250,
  //   borderRadius:30,
  // },
});