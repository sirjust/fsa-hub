import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Container, Header, List, ListItem, Separator, Content, Left, Right, Thumbnail, Body, Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

class HomeScreen extends Component
{
    render()
    {
        return (
        <Container>
          <Grid>
            <Col style={{ backgroundColor: '#3f51b5', height: 1000 }}>
            <View>
            <Text style={{ color: 'white', textAlign: 'left', fontSize: 26, marginTop: 10, marginLeft: 20}}>FSA Roadmap</Text>
            </View>

            <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/Apprentice.png')} />
              </Left>
              <Body>
                <Text style={{ color: 'white', fontSize: 18, fontStyle: "italic"}}>The Blueprint</Text>
                <Text note style={{ color: 'white'}}>The FSA Blueprint & Knowledge Base provide the freemium foundation for the next generation of technical education.</Text>
                <Text note style={{ color: 'white', paddingTop: 10}}>Launch Date - 12/28/2018</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/sticker-white.png')} />
              </Left>
              <Body>
              <Text style={{ color: 'white', fontSize: 18, fontStyle: "italic"}}>Hacker Keys</Text>
                <Text note style={{ color: 'white'}}>Educational stickers to help students learn to use the terminal, Git, AWS & helpful Node.js package commands.</Text>
                <Text note style={{ color: 'white', paddingTop: 10}}>Launch Date - 01/03/2019</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/Developer.png')} />
              </Left>
              <Body>
                <Text style={{ color: 'white', fontSize: 18, fontStyle: "italic"}}>'Community' Edition</Text>
                <Text note style={{ color: 'white'}}>Providing structure, accountability & process to the learning process for the Full-Stack Apprenticeship.</Text>
                <Text note style={{ color: 'white', paddingTop: 10}}>Launch Date - 01/23/2019</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/Engineer.png')} />
              </Left>
              <Body>
                <Text style={{ color: 'white', fontSize: 18, fontStyle: "italic"}}>'Leadership' Edition</Text>
                <Text note style={{ color: 'white'}}>Providing leaders in communities across the United States (and around the world!) with a repeatable process & tools to train and mentor full-stack developers.</Text>
                <Text note style={{ color: 'white', paddingTop: 10}}>Launch Date - 02/15/2019</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
            </Col>
            </Grid>
      </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})


export default HomeScreen;