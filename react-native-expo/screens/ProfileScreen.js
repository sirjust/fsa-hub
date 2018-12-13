import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Card, Header, Title, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";


class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
            <View style={styles.container}>

            <Thumbnail round large source={{uri: 'https://avatars3.githubusercontent.com/u/15205259?s=400&u=64ad9374b8d98f09dc5709fcc737e5ec4f2447f3&v=4'}} style={{height: 200, width: 200, flex: 1, alignContent: 'center', alignItems: 'center'}} />
            <Text style={{paddingTop: 10}}><Icon type="FontAwesome" name="map-pin" />Currently in - Seattle</Text>
              <Left>
              <Text>{`\nMichael Litchev`}</Text>
              </Left>
            <Text>{`\nThis is all passed in from props, from the Dynamo Users table. Jonathan is a hard-worker, skilled in React.js, React Native & Node.js.`}</Text>
            <CardItem>
                <Left>
                  <Text>Technology</Text>
                </Left>
                <Right>
                  <Text>Discover</Text>
                </Right>
            </CardItem>
          </View>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>GitHub</Text>
                </Button>
              </Left>
              <Right>
              <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-linkedin" />
                  <Text>LinkedIn</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 20,

    
  },
});

export default ProfileScreen;
