import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Routes from "./Routes";
import './App.css';

Amplify.configure(aws_exports);

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: null,
      object: {},
    }
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        const token = user.signInUserSession.idToken;
        this.loginUser(token);
      })
      .catch(err => console.log(err));
  }

  render() {
    const childProps = {
      object: this.state.object,
      loginUser: this.loginUser.bind(this),
    }
    const location = window.location.href;
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              <Button color='inherit' href={location}>FullStack Apprentice</Button>
            </Typography>
            {this.state.userToken
              ? [
                <Button key={0} color='inherit' onClick={this.handleLogout}>Logout</Button>,
                <Button key={1} color='inherit' href={location + 'knowledge'}>Knowledge</Button>
              ]
              : [
                
                <Button key={0} color='inherit' href={location + 'signup'}>Register</Button>,
                <Button key={1} color='inherit' href={location + 'login'}>Login</Button>
              ]}
          </Toolbar>
        </AppBar>

        <Routes childProps={childProps} />
      </div>
    );
  }

  loginUser = userToken => {
    this.setState({
      userToken: userToken
    });
  }

  handleLogout = () => {
    Auth.signOut()
      .then(() => {
        this.setState({
          userToken: null
        });
        alert("Logged out!");
      })
      .catch(err => console.log(err));
  }
}

export default App;
