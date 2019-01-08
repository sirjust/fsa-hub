import React, { Component } from 'react';
import { API, Auth } from "aws-amplify";
import { View, Container, DatePicker, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import uuidv4 from "uuid";


export default class CreatEventScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            start: "",
            chosenTime: "",
            end: "",
            organizerId: 'f9f9cfa2-8ecb-4207-99a9-bec998d5b14a',
            chosenDate: new Date(2019, 1, 10),
            isDateTimePickerVisible: false,
        }
        this.setDate = this.setDate.bind(this);
    }

    // async componentDidMount() {
    //     const user = await Auth.currentUserInfo()
    //     const sub =  user.attributes.sub;
    //     this.setState({ organizerId: sub })
    // }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

    handlePress = async () => {

        const body = {
            id: uuidv4(),
            organizerId: this.state.organizerId,
            name: this.state.name,
            description: this.state.description,
            date: this.state.chosenDate,
            start: this.state.start,
            end: this.state.end,
            createdAt: Date.now()
        }

        try {
            const response = await API.post('eventslambda', '/events', {body})
            console.log('Lambda Response: ', response)
        } catch (e) {
            console.log('ERROR: ', e)
        }
        this.setState({
            name: "",
            description: "",
            chosenDate: new Date(),
            start: "",
            end: "",
            id: ""
        })
        this.props.navigation.navigate('Home')
    }

    render() {
        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                        <Label>Event Name</Label>
                            <Input 
                            placeholder=""
                            returnKeyType="search"
                            value={this.state.name}
                            onChangeText={(name) => this.setState({name})}
                            autoCapitalize="none"
                            />
                        </Item> 
                        <Item floatingLabel>
                        <Label>Description</Label>
                            <Input 
                            placeholder=""
                            returnKeyType="search"
                            value={this.state.description}
                            onChangeText={(description) => this.setState({description})}
                            autoCapitalize="none"
                            />
                        </Item> 
                            <View style={{paddingTop: 25, paddingLeft: 5, marginBottom: -20}}>
                            <DatePicker
                                defaultDate={new Date(2019, 0, 1)}
                                minimumDate={new Date(2019, 0, 1)}
                                maximumDate={new Date(2019, 12, 31)}
                                locale={"en-US"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select Day"
                                textStyle={{ color: "purple" }}
                                placeHolderTextStyle={{ color: "black", textDecorationLine: "underline"}}
                                onDateChange={this.setDate}
                                disabled={false}
                                /> 
                                <Text style={{paddingLeft: 10, paddingBottom: 10}}>
                                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                                </Text>
                        </View>
                        <Item floatingLabel>
                        <Label>Start Time</Label>
                            <Input 
                            placeholder=""
                            returnKeyType="search"
                            value={this.state.start}
                            onChangeText={(start) => this.setState({start})}
                            autoCapitalize="none"
                            />
                        </Item>
                        <Item floatingLabel>
                        <Label>End Time</Label>
                            <Input 
                            placeholder=""
                            returnKeyType="search"
                            value={this.state.end}
                            onChangeText={(end) => this.setState({end})}
                            autoCapitalize="none"
                            />
                        </Item> 
                        <Text>{`\n`}</Text>
                        <Button full style={{backgroundColor: "#6200EE"}} onPress={this.handlePress}>
                        <Text>Create Event</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

