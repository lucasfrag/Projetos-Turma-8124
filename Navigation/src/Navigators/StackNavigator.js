import { Component } from "react";
import { View, Text } from "react-native";
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre';
import Exemplo from '../Screens/Exemplo';
import DrawerNavigator from "./DrawerNavigator";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={DrawerNavigator} name="Drawer" options={{headerShown: false}} />
            <Stack.Screen component={Exemplo} name="Exemplo" />
        </Stack.Navigator>
    )
}