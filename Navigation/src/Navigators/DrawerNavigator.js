import { Component } from "react";
import { View, Text } from "react-native";
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre';
import Exemplo from '../Screens/Exemplo';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen component={Home} name="Home" />
            <Drawer.Screen component={Sobre} name="Sobre" />
        </Drawer.Navigator>
    )
}