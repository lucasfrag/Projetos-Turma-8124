import React, { Component } from 'react';

import Home from './src/Screens/Home';
import Cadastro from './src/Screens/Cadastro';
import Lista from './src/Screens/Lista';

import Icon from 'react-native-vector-icons/Ionicons'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

//import { createStackNavigator } from '@react-navigation/stack';
//const Stack = createStackNavigator();
const icons = {
  Home: {
    name: 'ios-home'
  },
  Cadastro: {
    name: 'ios-people'
  },
  Lista: {
    name: 'list'
  }
};


export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];
              return <Icon name={name} color={color} size={size} />
            }
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cadastro" component={Cadastro} />
          <Tab.Screen name="Lista" component={Lista} />

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

