/* 
  ACIT 3650
   npm install
   npm install react-navigation --save
   npm install react-native-vector-icons --save
   npm install react-native-permissions --save
   npm install react-native-maps --save
*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CreateComponent from "./components/CreateAccount";
import Locations from "./components/Locations";
import PreviewCity from "./components/PreviewCity";
import CityMap from "./components/CityMap";


const SimpleCityTours = StackNavigator({
  Create: {
    screen: CreateComponent
  },
  Locations:{
    screen: Locations
  },
  PreviewCity:{
    screen: PreviewCity
  },
  CityMap:{
    screen: CityMap
  }
},{ 
    headerMode: 'screen' 
  });


export default class App extends React.Component {
  render() {
    return (
      <SimpleCityTours />
    );
  }
}

