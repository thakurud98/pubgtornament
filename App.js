import React, { Component } from 'react';
import { StyleSheet,TextInput, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: ''
    }
  }

  render() {
    console.log("states in app.js")
    return (
      <View style={styles.container}>
        <Text>Welcome to pubg mobile app</Text>
        <Text>Email</Text>
        <TextInput placeholder="Email"  onChangeText={(text) => this.setState({email : text})}/>
        <Text>Password</Text>
        <TextInput placeholder="Password" type="password"  onChangeText={(text) => this.setState({password : text})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
