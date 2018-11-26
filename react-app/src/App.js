import React from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import TopNavbar from "./components/TopNavbar";
import Routes from "./Routes";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";

import { thunkCurrentAuthenticatedUser } from "./thunks/auth";

require("typeface-quicksand");

Amplify.configure(aws_exports);

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontSize: 16,
        fontFamily: "'Quicksand', sans-serif;"
    }
});

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(thunkCurrentAuthenticatedUser());
    }

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
