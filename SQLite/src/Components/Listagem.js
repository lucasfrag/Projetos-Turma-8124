import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Listagem extends Component {

    getEstilo = () => {
        if(this.props.status == "A venda") {
            return { color: 'blue' }
        } else if (this.props.status == "Vendido") {
            return {color: 'green'}
        } else if (this.props.status == "Em manutenção") {
            return {color: 'orange'}
        } else {
            return {color: 'red'}
        }
    }

    render() {
        return(
            <View>
                
                <Text>ID: {this.props.id}</Text>
                <Text>Marca: {this.props.marca} </Text>
                <Text>Modelo: {this.props.modelo} </Text>
                <Text>Ano: {this.props.ano} </Text>
                <Text>Cor: {this.props.cor} </Text>
                <Text style={this.getEstilo()}>Status: {this.props.status} </Text>
            

                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', aligmItems: 'center', backgroundColor: 'blue', height: 25, padding: 2, margin: 5}} onPress={() => this.props.venda(this.props.id)}>
                    <Text style={{color: 'white', textAlign: 'center'}}>A VENDA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1,justifyContent: 'center', aligmItems: 'center', backgroundColor: 'green',  height: 25, padding: 2, margin: 5}} onPress={() => this.props.vendido(this.props.id)}>
                    <Text style={{color: 'white', textAlign: 'center'}}>VENDIDO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1,justifyContent: 'center', aligmItems: 'center', backgroundColor: 'orange',  height: 25, padding: 2, margin: 5}} onPress={() => this.props.manutencao(this.props.id)}>
                    <Text style={{color: 'white', textAlign: 'center'}}>MANUT.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1,justifyContent: 'center', aligmItems: 'center', backgroundColor: 'red', height: 25, padding: 2, margin: 5}} onPress={() => this.props.excluir(this.props.id)}>
                    <Text style={{color: 'white', textAlign: 'center'}}>EXCLUIR</Text>
                </TouchableOpacity>
                </View>
                <Text></Text>
            </View>
        )
    }
}