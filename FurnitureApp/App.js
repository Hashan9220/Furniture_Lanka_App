
import React, { Component } from 'react'
import { Text, View,StyleSheet,style,Image,TouchableOpacity,onPress } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
import Product from './Screen/Product';



const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
   <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Product" component={Product} />
      {/* <Stack.Screen name="Settings" component={Settings} />screenOptions={{header:() =>null */}
    </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
