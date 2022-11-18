import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
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
      status: "",
      lista: []
    }

    this.Listar()
  }

  // Funções anônimas para chamada dos métodos
  TestarConexao = () => {
    const db = new Database();
    db.Conectar();
  }

  Cadastrar = (marca, modelo, ano, cor, status) => {
    const db = new Database();
    const novoVeiculo = new Veiculo(marca, modelo, ano, cor, status);
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

  Venda = (id) => {
    const db = new Database();
    db.UpdateVenda(id);
    this.Listar();
  }

  Vendido = (id) => {
    const db = new Database();
    db.UpdateVendido(id);
    this.Listar();
  }

  Manutencao = (id) => {
    const db = new Database();
    db.UpdateManutencao(id);
    this.Listar();
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

        <ScrollView>
          <Text style={{fontSize: 20, marginBottom: 10}}>Lista de veículos cadastrados</Text>
          
          {
            this.state.lista.map(
              item => (<Listagem 
                key={item.id} 
                id={item.id} 
                modelo={item.modelo} 
                marca={item.marca} 
                cor={item.cor} 
                ano={item.ano} 
                status={item.status} 
                
                venda={this.Venda}
                vendido={this.Vendido}
                manutencao={this.Manutencao}
                excluir={this.Deletar} />)
            )
          }
          
        </ScrollView>
      </View>
    )
  }
}

const estilo = new StyleSheet.create({
  flex: {
    flex: 1
  }
})  