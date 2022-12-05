import { Component } from "react";
import {View, Text} from "react-native";
import Home from './src/Screens/Home';
import Sobre from "./src/Screens/Sobre";

// Navegações
import StackNavigator from "./src/Navigators/StackNavigator";
import TabNavigator from "./src/Navigators/TabNavigator";
import DrawerNavigator from "./src/Navigators/DrawerNavigator";

import { NavigationContainer } from "@react-navigation/native";



export default class App extends Component {
    render() {
        return(
            <NavigationContainer>
              <TabNavigator />
            </NavigationContainer>
        )
    }
}