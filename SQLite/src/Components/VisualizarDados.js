import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class VisualizarDados extends Component {
    render() {
        return (
            <View>
                <Text></Text>
                <Text>Os seguintes dados serão cadastrados:</Text>
                <Text>Marca: {this.props.marca}</Text>
                <Text>Modelo: {this.props.modelo}</Text>
                <Text>Ano: {this.props.ano}</Text>
                <Text>Cor: {this.props.cor}</Text>
                <Text></Text>
            </View>
        )
    }
}