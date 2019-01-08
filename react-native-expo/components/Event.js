import React from 'react';
import { Button, Text, ListItem, Left, Right, Body, Thumbnail } from 'native-base';
import moment from "moment";

export default class Event extends React.Component {
  render() {
    return (
        <ListItem>
              {/* <Left>
                <Thumbnail source={this.props.avatar} />
              </Left> */}
              <Body>
                <Text style={{ color: 'white', fontSize: 18, fontStyle: "italic"}}>{this.props.name}</Text>
                <Text note style={{ color: 'white'}}>{this.props.description}</Text>
                <Text note style={{ color: 'white', paddingTop: 10}}>{moment(this.props.date).format('MMMM Do YYYY, h:mm:ss a').split(",")[0]} | {this.props.start} - {this.props.end}</Text>
                
              </Body>
            </ListItem>
    );
  }
}