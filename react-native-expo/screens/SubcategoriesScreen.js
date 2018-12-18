import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, List, ListItem, Text, Button, Icon, Left, Right, Body} from 'native-base';
import { withNavigation } from 'react-navigation';
import NavButton from "../components/NavButton"

class SubcategoriesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }
    async componentDidMount() {
        // const query = `*[_type == '${this.props.match.params.schema}']{type, _type, text, title, url, _id}`
        // const links = await sanity.fetch(query);
        // this.setState({ links })
        const schema = this.props.navigation.getParam('schema', 'NoSchema')
        console.log('Schema: ', JSON.stringify(schema))

    }
    render(){
        const schema = this.props.navigation.getParam('schema', 'NoSchema')

        return (
        <Container>
        <Header />
            <Content>
            <List>
            <ListItem>
              <Left>
                <Text>Getting Started - {schema}</Text>
              </Left>
              <Right>
                <Right>
                <NavButton transparent navigation={this.props.navigation} route="Content" schema="gettingStarted">
                  <Text>=></Text>
                </NavButton>
              </Right>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>React Web</Text>
              </Left>
              <Right>
                <Right>
                <Button transparent>
                  <Text>=></Text>
                </Button>
              </Right>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Node.js</Text>
              </Left>
              <Right>
                <Right>
                <Button transparent>
                  <Text>=></Text>
                </Button>
              </Right>
              </Right>
            </ListItem>
          </List>
            </Content>
            {/* <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../assets/knowledge.png')} />
                            <Body>
                                <Text>React Native</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Button block textStyle={{color: `#8738B`}}>
                                <Text>View Content</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content> */}
            {/* <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../assets/knowledge.png')} />
                            <Body>
                                <Text>React Web</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Button block textStyle={{color: `#8738B`}}>
                                <Text>View Content</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content> */}
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SubcategoriesScreen;