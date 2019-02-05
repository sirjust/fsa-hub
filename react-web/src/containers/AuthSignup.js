import React, { Component } from 'react';
import { Authenticator } from 'aws-amplify-react';
import awsmobile from "../aws-exports";


export default class AuthSignup extends Component {
  render() {
    const { user, changeAuthState } = this.props
    return (
      <React.Fragment>
        { !user && <Authenticator amplifyConfig={awsmobile} 
        autState="signIn"
        onStateChange={(authState) => changeAuthState(authState)} 
     />}

        { user && <h3>You are signed in as {user.username}</h3>}
      </React.Fragment>
    )
  }
}