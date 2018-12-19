import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Container, Header, List, ListItem, Separator, Content, Left, Right, Thumbnail, Body, Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';


class HomeScreen extends Component
{
    render()
    {
        return (
        <Container>
          <Grid>
            <Col style={{ backgroundColor: '#6200EE', height: 400 }}>
            <View>
            <Text style={{ color: 'white', textAlign: 'left', fontSize: 26, marginTop: 10, marginLeft: 20}}>12/13/2018</Text>
            </View>

            <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/arrow.png')} />
              </Left>
              <Body>
                <Text style={{ color: 'white'}}>Morning Workout</Text>
                <Text note style={{ color: 'white'}}>Lifting, crunches, take a swim.</Text>
                <Text note style={{ color: 'white'}}>Lifting, crunches, take a swim.</Text>
              </Body>
              <Right>
                <Text note style={{ color: 'white'}}>7am - 8am</Text>
                <Text note style={{ color: 'white'}}>15 Points</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/arrow.png')} />
              </Left>
              <Body>
                <Text style={{ color: 'white'}}>Focus Session #1</Text>
                <Text note style={{ color: 'white'}}>Ticket Item: #38</Text>
                <Text note style={{ color: 'white'}}>One 10 minute break.</Text>
              </Body>
              <Right>
                <Text note style={{ color: 'white'}}>9am - 11am</Text>
                <Text note style={{ color: 'white'}}>20 Points</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/arrow.png')} />
              </Left>
              <Body>
                <Text style={{ color: 'white'}}>Focus Session #2</Text>
                <Text note style={{ color: 'white'}}>Ticket Item: #38</Text>
                <Text note style={{ color: 'white'}}>One 10 minute break.</Text>
              </Body>
              <Right>
                <Text note style={{ color: 'white'}}>12pm - 2pm</Text>
                <Text note style={{ color: 'white'}}>20 Points</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20}}>Upcoming FSA Events</Text>
            </Col>
            </Grid>
            <Grid>
            <Col style={{ backgroundColor: '#3700B3', height: 300 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 24, marginTop: 10}}>GitHub Stats</Text>
            <View></View>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20}}>Open Tickets</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 14}}>#38 fsa-hub</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 14}}>#56 work&rise</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, marginTop: 20}}>Notifications (12)</Text>

            </Col>
            <Col style={{ backgroundColor: '#3f51b5', height: 300 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 24, marginTop: 10}}>My Journey</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20}}>Monthly Points: 589</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 14}}>Weekly Points: 149</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 14}}>Daily Points: 35</Text>
            </Col>
          </Grid>
      </Container>
        );
    }
}

// main: "#6200EE"
//             main: '#9c27b0'
//             main: '#3700B3'

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