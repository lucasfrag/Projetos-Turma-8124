import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class Cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cronometro: 0.0,
            botao1: 'VAI!',
            botao2: 'ZERAR',
            timer: null,
            lista: [],
            contador: 1
        }
    }

    iniciar = () => {
        if (this.timer != null) {
            clearInterval(this.timer)
            this.timer = null
            this.setState({ botao1: "VAI!"})
        } else {
            this.timer = setInterval( () => {this.setState({cronometro: this.state.cronometro + 0.1})}, 1000)
            this.setState({ botao1: 'PAUSAR' })
            this.setState({ botao2: 'SALVAR E ZERAR' })
            
        }
    }

    zerar = () => {
        if(this.timer != null) {
            clearInterval( this.timer )
            this.timer = null
            this.setState({ botao1: "VAI!"})
        }
        this.salvar()
        this.setState({cronometro: 0})
        this.setState({botao: "VAI"})
    }

    salvar = () => {
        let { lista } = this.state;
        lista.push(<Text>Registro {this.state.contador}: {this.state.cronometro.toFixed(1)}</Text>)
        this.setState({lista: [lista]})
        this.setState({contador: this.state.contador + 1})
    }

    render() {
        return (
            <View style={estilo.alinharConteudo}>
                <Text>Cronometro React Native</Text>
                <Text></Text>
                <Image
                    source={{ uri: 'https://images.vexels.com/media/users/3/128840/isolated/preview/c091629800ce3d91d8527d32d60bc46f-cron-metro.png' }}
                    style={{ width: 150, height: 150 }}
                />
                <Text style={estilo.contador}>{this.state.cronometro.toFixed(1)}</Text>

                <View style={estilo.areaBotoes}>
                    <TouchableOpacity onPress={this.iniciar} style={estilo.botao}>
                        <Text style={estilo.textoBranco}>{this.state.botao1}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.zerar} style={estilo.botao}>
                        <Text style={estilo.textoBranco}>{this.state.botao2}</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{width: 300}}>
                    <Text>REGISTRO DE VOLTAS</Text>
                    {this.state.lista}
                </ScrollView>
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    alinharConteudo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        flex: 1,
        backgroundColor: '#4226bf',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        margin: 10,
        borderRadius: 40
    },
    areaBotoes: {
        flexDirection: 'row'
    },
    textoBranco: {
        color: 'white'
    },
    contador: {
        fontSize: 28
    }
})