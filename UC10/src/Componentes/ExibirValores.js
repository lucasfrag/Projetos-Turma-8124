import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';

export default class ExibirValores extends Component {
  render() {
    return (
        <View>
            <Text>Registro {this.props.id}</Text>            
            <Text>{this.props.tempo}</Text>
            <Text></Text>
        </View>
    );
  }
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