import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      cargo: '' 
    }
    
    this.cadastrarFuncionario = this.cadastrarFuncionario.bind(this);

    // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: "AIzaSyCYcmMz6c902kY6YKeQTtIXO1WecBW2LJY",
      authDomain: "meuapp-52fbb.firebaseapp.com",
      databaseURL: "https://meuapp-52fbb.firebaseio.com",
      projectId: "meuapp-52fbb",
      storageBucket: "meuapp-52fbb.appspot.com",
      messagingSenderId: "534848418150",
      appId: "1:534848418150:web:2b7848db63b9a2baab18a7",
      measurementId: "G-71S0JH509N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    // Criar um nó
    // firebase.database().ref('tipo').set('Cliente');

    //alterando um dado no firebase
    // firebase.database().ref('usuarios').child(2).child('nome').set('Justai');
    // firebase.database().ref('usuarios').child(2).child('idade').set(33);

    //Alterando com uma chave diferente
    // let id = '-LsOrWQUP_Z0QK4VxVpm'; 
    // firebase.database().ref('usuarios').child(id).set({
    //   nome: 'Jose Jose',
    //   cargo: 'Administrativo'
    // });

    //deletando um usuario
    // firebase.database().ref('usuarios').child(2).remove();

    firebase.database().ref('tipo').remove();
  }

  cadastrarFuncionario(){
    if(this.state.nome != '' && this.state.cargo != ''){
      
      let usuarios = firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: this.state.nome,
        cargo: this.state.cargo
      });

      alert('Cadastrado com Sucesso!');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Nome</Text>
        <TextInput underlineColorAndroid="transparent" style={styles.input}
              onChangeText={(nome) => {this.setState({nome})}}></TextInput>

        <Text style={styles.texto}>Cargo</Text>
        <TextInput underlineColorAndroid="transparent" style={styles.input}
              onChangeText={(cargo) => {this.setState({cargo})}}></TextInput>

        <Button title="Novo Funcionario" onPress={this.cadastrarFuncionario}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  texto:{
    fontSize: 20
  }, 
  input:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    height: 40
  }
});
