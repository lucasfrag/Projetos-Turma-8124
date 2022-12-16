import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'

export default function Jogo({item})  {
    return(
        <View style={{width: 180, marginBottom: 5}}>
            <View style={{height: 200, flex: 1, margin: 10}}>
                <Image source={{uri: item.imagem}} style={{flex: 1, borderRadius: 20}}/>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{item.nome}</Text>
            </View>
        </View>
    )
}