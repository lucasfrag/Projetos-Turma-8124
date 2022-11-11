import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Listagem extends Component {
    render() {
        return(
            <View>
                
                <Text>
                    ID: {this.props.id},
                    Marca: {this.props.marca},
                    Modelo: {this.props.modelo},
                    Ano: {this.props.ano},
                    Cor: {this.props.cor}
                </Text>
                <TouchableOpacity onPress={() => this.props.excluir(this.props.id)}>
                    <Text>Clique aqui para excluir o item {this.props.id}</Text>
                </TouchableOpacity>
                <Text></Text>
            </View>
        )
    }
}