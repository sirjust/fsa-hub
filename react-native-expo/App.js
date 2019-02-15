import React, {Component} from 'react';
import Amplify, { Auth, API } from "aws-amplify";
import awsmobile from "./aws-exports"
import { Font, AppLoading } from "expo";
import { withAuthenticator } from "aws-amplify-react-native"

import AppNavigator from './config/navigation'

Amplify.configure(awsmobile)

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
          });
    }

    render() {
        return (
          <AppNavigator screenProps={{...this.props}}/>
        );
    }
}

export default withAuthenticator(App);
