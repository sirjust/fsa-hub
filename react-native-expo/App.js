import React, {Component} from 'react';
import Amplify, { Auth, API } from "aws-amplify";
import awsmobile from "./aws-exports"
import config from "./config"

import AppNavigator from './config/navigation'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    async componentDidMount() {
        this.configure()
        console.log('Export info: ', awsmobile)

    }

    async configure() {
        const result = await Amplify.configure({
          Auth: {
              mandatorySignIn: false,
              region: config.cognito.REGION,
              userPoolId: config.cognito.USER_POOL_ID,
              identityPoolId: config.cognito.IDENTITY_POOL_ID,
              userPoolWebClientId: config.cognito.APP_CLIENT_ID
          },
        //   Storage: {
        //       region: config.s3.REGION,
        //       bucket: config.s3.BUCKET,
        //       identityPoolId: config.cognito.IDENTITY_POOL_ID
        //   },
        //   API: {
        //       endpoints: [
        //           {
        //               name: "fsa",
        //               endpoint: config.apiGateway.URL,
        //               region: config.apiGateway.REGION
        //           },
        //       ]
        //   }
      });
      console.log('Result: ', result);
      }

    render() {
        return (
          <AppNavigator/>
        );
    }
}

export default App;
