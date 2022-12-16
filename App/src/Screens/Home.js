import React, { Component } from 'react';
import { ScrollView, Text, Button, TouchableOpacity, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Fontisto'
import Jogo from '../Components/Jogo';

export default function Home({ navigation }) {

    const lista = 
    [
        {id: 1, nome: "God of War: Ragnarok", imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"},
        {id: 2, nome: "Metal Gear Solid V", imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0205/dyvo9eGUf7WTZx49eTpQyDuL.png" },
        {id: 2, nome: "Street Fighter 6", imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202211/1407/XFU0aPBvtm3W2od1ZvhByAOv.png" }
    ]

    return (
        <ScrollView>
            <Text style={{fontSize: 25}}><Icon2 name="rocket-launch" size={25} color="black"/> Seja bem-vindo!</Text>
            <Text></Text>
            
        
            <View style={{flex: 1}}>
                <FlatList 
                    data={lista}
                    renderItem={( {item} ) => Jogo({item})}
                    
                    numColumns={2}
                />
            </View>
           
            <TouchableOpacity style={{margin: 10, backgroundColor: 'purple', width: 200, borderRadius: 5, alignItems: 'center', height: 35, justifyContent: 'center', }} onPress={() => navigation.navigate('Lista')} >
                <Text style={{fontSize: 18, color: 'white'}}><Icon name="list" size={18} /> Lista de Veículos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding: 5, margin: 10, backgroundColor: 'blue', width: 250, borderRadius: 5, alignItems: 'center', height: 35, justifyContent: 'center', }} onPress={() => navigation.navigate('Cadastro')} >
                <Text style={{fontSize: 18, color: 'white'}}><Icon name="car" size={18} /> Cadastro de Veículos</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}