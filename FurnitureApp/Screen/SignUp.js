import React, { Component } from 'react';
import { Text, ScrollView, ImageBackground,
  Dimensions,View,StyleSheet,TextInput,
  onChangeText,text,TouchableOpacity,onPress,color,placeholder  } from 'react-native';
import Product from './Product'
export default class SignUp extends Component {
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
        <View style={{padding:40}}>
          <Text style={{color:'#4632A1',fontSize:34}}>Welcome to SignUp</Text>
          
          
          <View style={{marginTop:50}}>
          <TextInput style={styles.input} onChangeText={onChangeText}value={text} placeholder="Enter Username" placeholderTextColor="#000000"/>
          <TextInput style={styles.input} onChangeText={onChangeText}value={text} placeholder="Enter Email" placeholderTextColor="#000000"/>
          <TextInput style={styles.input} onChangeText={onChangeText}value={text} placeholder="Enter Password" placeholderTextColor="#000000"/>
          {/* <TouchableOpacity style={styles.button} onPress={this.onPress}><Text style={{color:'#fffff',fontSize:25,fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Login')}}  style={{
                 marginTop:'20%',
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
><Text style={{fontSize:25,color:'#fffff',fontWeight:'bold'}}>SignUp</Text></TouchableOpacity>
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
  bottom:50,
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
button: {
  height: 40,
  alignItems: "center",
  justifyContent:'center',
  backgroundColor: "#000",
  padding: 25,
  marginLeft:20,
  width:250,
  borderRadius:30,
},
});