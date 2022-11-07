import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';

export default function AppFunction() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={estilo.criarArea}>

                {/* Chamada de imagem da web */}
                <Image
                    source={{ uri: 'https://www.nicepng.com/png/detail/222-2224978_how-react-native-works-react-native-logo-png.png' }}
                    style={{ width: 180, height: 150 }}
                />

                <Text style={[estilo.alinharTexto, estilo.colorirTexto]}>Olá, mundo!</Text>
                <Text></Text>
                <Text></Text>


                {/* Chamada de imagem local */}
                <Image
                    source={require('./src/Imagens/Logo2.png')}
                    style={{ width: 100, height: 109 }}
                />

                <TextInput
                    style={estilo.caixaDeTexto}
                    placeholder='Digite alguma coisa...'
                    keyboardType=''
                />

                <Button
                    title="Salvar"
                    color="green"
                    accessibilityLabel='Interagir com o botão salvar'
                />

                <Pressable>
                    <Text>Esse é um botão</Text>
                </Pressable>

                <TouchableOpacity style={estilo.botao}>
                    <Text style={[estilo.alinharTexto, estilo.textoBranco]}>Esse é um botão</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

}

// Estilização
const estilo = StyleSheet.create({
    alinharTexto: {
        textAlign: "center",
    },
    criarArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorirTexto: {
        color: 'red'
    },
    caixaDeTexto: {
        borderWidth: 1,
        margin: 12,
        height: 40,
        width: 300,
        padding: 10,
        borderRadius: 50
    },
    botao: {
        width: 150,
        height: 40,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textoBranco: {
        color: 'white'
    }
});