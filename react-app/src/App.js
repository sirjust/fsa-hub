import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

import Routes from "./Routes";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";
import './App.css';

Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: null,
      object: {},
    }
  }

  componentDidMount(){
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

    return (
      <div className="App">
        <div className="nav-menu" >
          <Navbar fluid collapseOnSelect >
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">FullStack Apprentice</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav pullRight>
                {this.state.userToken
                  ? [
                    <NavItem key={1} onClick={this.handleLogout}>Logout</NavItem>,
                  ]
                  : [
                    <RouteNavItem key={1} href="/signup">Register</RouteNavItem>,
                    <RouteNavItem key={2} href="/login">Login</RouteNavItem>
                  ]}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
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
