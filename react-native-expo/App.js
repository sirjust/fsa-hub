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

//     async configure() {
//         const result = await Amplify.configure({
//           Auth: {
//               mandatorySignIn: false,
//               region: config.cognito.REGION,
//               userPoolId: config.cognito.USER_POOL_ID,
//               identityPoolId: config.cognito.IDENTITY_POOL_ID,
//               userPoolWebClientId: config.cognito.APP_CLIENT_ID
//           },
//         //   Storage: {
//         //       region: config.s3.REGION,
//         //       bucket: config.s3.BUCKET,
//         //       identityPoolId: config.cognito.IDENTITY_POOL_ID
//         //   },
//           API: {
//               endpoints: [
//                   {
//                       name: "eventslambda",
//                       endpoint: config.apiGateway.URL,
//                       region: config.apiGateway.REGION
//                   },
//               ]
//           }
//       });
//   }

    render() {
        return (
          <AppNavigator/>
        );
    }
}

export default withAuthenticator(App);
