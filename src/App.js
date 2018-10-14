import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from "./Routes";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: {},
      object: {},
    }
  }
  render() {
    const childProps = {
      object: this.state.object,
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
                {!this.state.userToken
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
}

export default App;
