import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import Listagem from '../Components/Listagem';

import Database from '../Database/Database';
import Veiculo from '../Models/Veiculo';

export default class Cadastro extends Component {
  // Criação dos states
  constructor(props) {
    super(props);
    this.state = {
      marca: "",
      modelo: "",
      ano: "",
      cor: "",
      status: "",
      lista: []
    }
  }

  Cadastrar = (marca, modelo, ano, cor, status) => {
    const db = new Database();
    const novoVeiculo = new Veiculo(marca, modelo, ano, cor, status);
    db.Adicionar(novoVeiculo);
  }

  render() {
    return(
      <View style={estilo.flex}>
        <View>
          <Text style={{fontSize: 20, marginBottom: 10}}>Cadastro de veículos</Text>
          <TextInput onChangeText={(textoDigitado) => this.setState({marca: textoDigitado})} placeholder='Marca' />
          <TextInput onChangeText={(textoDigitado) => this.setState({modelo: textoDigitado})} placeholder='Modelo' />
          <TextInput onChangeText={(textoDigitado) => this.setState({ano: textoDigitado})} placeholder='Ano' />
          <TextInput onChangeText={(textoDigitado) => this.setState({cor: textoDigitado})} placeholder='Cor' />
          <TextInput onChangeText={(textoDigitado) => this.setState({status: textoDigitado})} placeholder='Status' />
          <Button title="Cadastrar" onPress={() => { this.Cadastrar(this.state.marca, this.state.modelo, this.state.ano, this.state.cor, this.state.status) } }/>
        </View>
      </View>
    )
  }
}

const estilo = new StyleSheet.create({
  flex: {
    flex: 1
  }
})  