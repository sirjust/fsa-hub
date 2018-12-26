import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, AsyncStorage } from 'react-native';
import { Auth } from "aws-amplify";
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';


class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirm: false,
      code: "",
      user: {}
    }
  }

  register = async () => {
    const attributes = {
      birthdate: "01/28/1994",
      name: "Michael",
      email: this.state.email, 
      family_name: "Litchev",
    }

    const user = await Auth.signUp({
      password: "P@ssw0rd!",
      username: this.state.email,
      attributes: attributes,
    });

    // console.log('USER OBJECT: ', JSON.stringify(user))
    // console.log('Username: ', user.username)

    await AsyncStorage.setItem('userToken', 'fsa');
    
    this.setState({ confirm: true, user: user })
  };

  confirm = async () => {
    await Auth.confirmSignUp(this.state.email, this.state.code);

    await AsyncStorage.setItem('userToken', 'fsa');

    this.props.navigation.navigate('App');
  };


  renderConfirmation() {
    return(
      <Container>
         <Content>
          <Form>
            <Item fixedLabel>
              <Label>code</Label>
              <Input
              placeholder="123456"
              returnKeyType="search"
              value={this.state.code}
              onChangeText={(code) => this.setState({ code })} 
              autoCapitalize="none"
              />
            </Item>
        <Button block style={{backgroundColor: "#6200EE", color: "white"}} onPress={() => this.confirm()}><Text style={{color: "white"}}>Complete Registration</Text></Button>
          </Form>
        </Content>
      </Container>
    )
  }

  renderRegister() {
    return(
    <Container>
    <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input
              placeholder="mikhael@mailinator.com"
              returnKeyType="search"
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })} 
              autoCapitalize="none"
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
              placeholder="P@ssw0rd!"
              returnKeyType="search"
              value={this.state.password}
              onChangeText={(password) => this.setState({ password})}
              autoCapitalize="none"
              />
            </Item>
        <Button full style={{backgroundColor: "#6200EE", color: "white"}} onPress={() => this.register()}><Text style={{color: "white"}}>Register</Text></Button>
          </Form>
        </Content>
    </Container>
    )
  }

  render() {
    return (
      <Container>
        {this.state.confirm === false ?
        this.renderRegister() : this.renderConfirmation()  
      }
      </Container> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;
