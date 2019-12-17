import React, { Component } from 'react';
import { Alert, Button,Text, TextInput, View, StyleSheet } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        password: ''
    }
  }

  onLogin() {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    console.log("states in app.js")
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  input: {
    color: 'white',
    borderRadius: 25,
    width: 250,
    maxWidth: 350,
    height: 44,
    // padding: 10,
    // paddingLeft: 25,
    textAlign:"center",
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    backgroundColor: '#000000'
  },
});
