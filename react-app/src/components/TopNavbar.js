import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { thunkSignOut } from "../thunks/auth";

const styles = {
    grow: {
        flexGrow: 1
    }
};
class TopNavbar extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const {
            classes,
            routeHome,
            routeknowledge,
            routeSignup,
            routeLogin,
            userToken,
            handleSignOut
        } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography component="h6" color="inherit">
                        <Button color="inherit" onClick={() => routeHome()}>
                            FullStack Apprenticeship
                        </Button>
                    </Typography>
                    <div className={classes.grow} />
                    {userToken
                        ? [
                              <Button
                                  key={0}
                                  onClick={() => routeknowledge()}
                                  color="inherit"
                              >
                                  Knowledge
                              </Button>,
                              <Button
                                  key={1}
                                  color="inherit"
                                  onClick={() => handleSignOut()}
                              >
                                  Logout
                              </Button>
                          ]
                        : [
                              <Button
                                  key={0}
                                  onClick={() => routeknowledge()}
                                  color="inherit"
                              >
                                  Knowledge Base
                              </Button>,
                              <Button
                                  key={1}
                                  color="inherit"
                                  onClick={() => routeSignup()}
                              >
                                  Register
                              </Button>,
                              <Button
                                  key={2}
                                  color="inherit"
                                  onClick={() => routeLogin()}
                              >
                                  Login
                              </Button>
                          ]}
                </Toolbar>
            </AppBar>
        );
    }
}

TopNavbar.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            routeHome: () => push("/"),
            routeSignup: () => push("/signup"),
            routeLogin: () => push("/login"),
            routeknowledge: () => push("/knowledge"),
            handleSignOut: () => thunkSignOut()
        },
        dispatch
    );
};

const mapStateToProps = state => ({
    userToken: state.auth.userToken
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(TopNavbar));
