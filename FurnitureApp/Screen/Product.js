import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity,ScrollView,Image } from 'react-native';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AnArray: [],
    };

  }


  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          AnArray: responseJson
        })
      })
      .catch((error) => {
        console.log(error);
      })

  }
  renderItem = ({ item }) => {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#000'}}>{item.albumId}</Text>
        <Text style={{color:'#000'}}>{item.id}</Text>
        <Text style={{color:'#000'}}>{item.title}</Text>
        <Image style={{width:100,height:100,resizeMode:'cover'}} source={{uri:item.url}}/>
        <Text style={{color:'#000'}}>{item.thumbnailUrl}</Text>
      </View>
    );
  }

  render() {
    console.log(this.state.AnArray);
    return (
      <>
      <ScrollView style ={{flex:1,paddingBottom:20,width:'100%',height:'100%'}}>
      <View>
        <FlatList 
          data={this.state.AnArray}
          renderItem={this.renderItem}

        />

        
      </View>
      </ScrollView>
      <View style={{ justifyContent:'center',alignItems:'center',alignSelf:'center',alignContent:'center',paddingTop:20,paddingBottom:20 }}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}
        style={{
          width: 250,
          height: 40,
          borderRadius: 30,
          backgroundColor: '#4632A1',
          alignItems: 'center',
          justifyContent: 'center',
        }
        }>
        <Text style={{ fontSize: 25, color: '#fffff', fontWeight: 'bold' }}>
          Back
        </Text></TouchableOpacity>
    </View>
</>
    );

  }


}