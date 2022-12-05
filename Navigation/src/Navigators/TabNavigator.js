import { Component } from "react";
import { View, Text } from "react-native";
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre';
import StackNavigator from "./StackNavigator";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen component={StackNavigator} name="Página Inicial" options={{headerShown: false}}/>
            
            <Tab.Screen component={Sobre} name="Sobre" />
        </Tab.Navigator>
    )
}