import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cliente : 'Carregando..'

    }
    
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
    //firebase.analytics();

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{paddingTop: 20, fontSize: 25}}>Olá {this.state.cliente}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
