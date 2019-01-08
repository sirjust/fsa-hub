import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { List, ListItem, Separator, Content, Left, Right, Thumbnail, Body, Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { API, Auth } from "aws-amplify";
import Event from "../components/Event";
import orderBy from "lodash.orderby";

class HomeScreen extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }
  async componentDidMount() {
    try {
      const user = await Auth.currentUserInfo()
      const id = user.attributes.sub;
      // console.log(id)
      const response = await API.get('eventslambda', `/events/f9f9cfa2-8ecb-4207-99a9-bec998d5b14a`)
      const orderedArray = orderBy(response, function(item) {return item.date})
      this.setState({ events: orderedArray })
    } catch(e) {
      console.log(e)
    }
  }

  renderEvents = (events) => {
    return(
      <List>
      {events.map((event, i) => (
          <Event
                key={i} 
                name={event.name}
                description={event.description}
                date={event.date}
                start={event.start}
                end={event.end}
                // avatar={require('../assets/Apprentice.png')}
                />
        ))}
        </List>
      )
    }
  
    render()
    {
        return (
          <ScrollView>
            <Grid>
              <Col style={{ backgroundColor: '#3f51b5', height: 650 }}>
              <Text style={{ color: 'white', textAlign: 'left', fontSize: 26, marginTop: 10, marginLeft: 20}}>Upcoming Events</Text>
              <Content>
                {this.renderEvents(this.state.events)}
              </Content>
              </Col>
            </Grid>
          </ScrollView>
        );
    }
}

export default HomeScreen;