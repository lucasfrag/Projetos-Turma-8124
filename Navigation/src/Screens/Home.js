import { Component } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Exemplo from "./Exemplo";

export default function Home ({navigation}) {
    return(
        <View>
            <Text>Essa é a tela "Home" feita com função</Text>
            <Text></Text>

            <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
                <Text> Clique aqui para ir para SOBRE...</Text>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={() => navigation.navigate("Exemplo")}>
                <Text> Clique aqui para ir para a EXEMPLO...</Text>
            </TouchableOpacity>
        </View>
    )
}