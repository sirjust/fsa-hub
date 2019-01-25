import React from "react";
import Amplify, { Auth } from "aws-amplify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";

import Routes from "./Routes";
import awsmobile from "./aws-exports";
import config from './config';
// import { thunkCurrentAuthenticatedUser } from "./thunks/auth";
import TopNavbar from "./components/TopNavbar";

import "./App.css";
require("typeface-quicksand");

Amplify.configure(awsmobile);

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontSize: 16,
        fontFamily: "'Quicksand', sans-serif;"
    },
    palette: {
        primary: {
            // main: "#6200EE"
            // main: '#9c27b0'
            main: '#3700B3'
        }
    }
});

class App extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(thunkCurrentAuthenticatedUser());
    // }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline>
                    <TopNavbar />
                    <Routes />
                </CssBaseline>
            </MuiThemeProvider>
        );
    }

    handleLogout = () => {};
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
