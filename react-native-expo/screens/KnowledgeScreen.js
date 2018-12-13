import React, {Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base'; 

class KnowledgeScreen extends Component
{
    render()
    {
        return (
        <Container>
            <Content>
                <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/knowledge.png')} />
                        <Body>
                            <Text>FSA Technical Standard</Text>
                            <Text note>Key Tutorials, Articles & Websites</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        {/* <Image source={require('../assets/fsa.jpeg')} style={{height:100, width: 200, flex: 1}} /> */}
                        <Text>The Full-Stack Apprenticeship Technical Standard is our toolkit for building modern, scalable applications. They are chosen for their production readiness, available documentation, open-source libraries & tutorials available for the learning process.</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <Button block textStyle={{color: `#87838B`}}>
                            <Text>View Resources</Text>
                        </Button>                      
                    </Body>
                </CardItem>
                </Card>
            </Content>
            <Content>
                <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/fsa.jpeg')} />
                        <Body>
                            <Text>Jobs, Freelancing, Start-ups</Text>
                            <Text note>Job boards, links, resources, agreements templates</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        {/* <Image source={{uri: 'somewhere'}} style={{height:100, width: 200, flex: 1}} /> */}
                        <Text>Our official directory for resources relating to finding freelance work, full-time roles, interviewing, start-up related inquiries & everything in between. </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <Button block textStyle={{color: `#87838B`}}>
                            <Text>View Resources</Text>
                        </Button>
                        </Body>
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
        justifyContent: 'center'
    }
})


export default KnowledgeScreen;