import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Listagem from './src/Components/Listagem';

import Database from './src/Database/Database';
import Veiculo from './src/Models/Veiculo';

export default class App extends Component {
  // Criação dos states
  constructor(props) {
    super(props);
    this.state = {
      marca: "",
      modelo: "",
      ano: "",
      cor: "",
      lista: []
    }

    this.Listar()
  }

  // Funções anônimas para chamada dos métodos
  TestarConexao = () => {
    const db = new Database();
    db.Conectar();
  }

  Cadastrar = (marca, modelo, ano, cor) => {
    const db = new Database();
    const novoVeiculo = new Veiculo(marca, modelo, ano, cor);
    db.Adicionar(novoVeiculo);
    this.Listar();
  }

  Listar = () => {
    const db = new Database();
    db.ListarTodos().then(data => {this.setState({lista: data})})
  }

  Deletar = (id) => {
    const db = new Database();
    db.Remover(id);
    this.Listar();
  }

  render() {
    return(
      <View style={estilo.flex}>
        <View>
          <Text>Cadastro</Text>
          <TextInput onChangeText={(textoDigitado) => this.setState({marca: textoDigitado})} placeholder='Marca' />
          <TextInput onChangeText={(textoDigitado) => this.setState({modelo: textoDigitado})} placeholder='Modelo' />
          <TextInput onChangeText={(textoDigitado) => this.setState({ano: textoDigitado})} placeholder='Ano' />
          <TextInput onChangeText={(textoDigitado) => this.setState({cor: textoDigitado})} placeholder='cor' />
          <Button title="Cadastrar" onPress={() => { this.Cadastrar(this.state.marca, this.state.modelo, this.state.ano, this.state.cor) } }/>
        </View>

        <View>
          <Text>Listagem</Text>
          {
            this.state.lista.map(
              item => (<Listagem id={item.id} modelo={item.modelo} marca={item.marca} cor={item.cor} ano={item.ano} excluir={this.Deletar} />)
            )
          }
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