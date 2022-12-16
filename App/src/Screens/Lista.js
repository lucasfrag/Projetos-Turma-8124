import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Listagem from '../Components/Listagem';
import Icon from 'react-native-vector-icons/Ionicons'

import Database from '../Database/Database';

export default class Lista extends Component {
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

  Listar = () => {
    const db = new Database();
    db.ListarTodos().then(data => { this.setState({ lista: data }) })
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
    return (
      <View style={estilo.flex}>
        <ScrollView>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Lista de veículos cadastrados</Text>

          <TouchableOpacity onPress={() => this.Listar()}>
            <Text><Icon name="refresh" size={14}/> Clique aqui para atualizar a lista</Text>
          </TouchableOpacity> 

          <Text></Text>
          <Text></Text>
          <Text></Text>

          <FlatList
            initialNumToRender={10}
            keyExtractor={item => item.id}
            data={this.state.lista}
            renderItem={({ item }) =>
              <Listagem
                id={item.id}
                modelo={item.modelo}
                marca={item.marca}
                cor={item.cor}
                ano={item.ano}
                status={item.status}

                venda={this.Venda}
                vendido={this.Vendido}
                manutencao={this.Manutencao}
                excluir={this.Deletar}
              />
            }
          />


          {/*
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
              */}

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