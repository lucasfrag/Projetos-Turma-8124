import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Sobre({navigation}) {
    
        return (
            <View>
                <Text>Essa é a tela "Sobre"</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
                    <Text> Clique aqui para ir para próxima tela...</Text>
                </TouchableOpacity>
            </View>
        )
    
}