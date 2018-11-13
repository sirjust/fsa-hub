import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
    grow: {
        flexGrow: 1
    }
};
class TopNavbar extends React.Component {
    render() {
        const { classes, childProps } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <Button color="inherit" href="http://localhost:3000">
                            FullStack Apprentice
                        </Button>
                    </Typography>
                    <div className={classes.grow} />
                    {childProps.userToken
                        ? [
                              <Button
                                  key={0}
                                  component={Link}
                                  to="/knowledge"
                                  color="inherit"
                              >
                                  Knowledge
                              </Button>,
                              <Button
                                  key={1}
                                  color="inherit"
                                  onClick={this.handleLogout}
                              >
                                  Logout
                              </Button>
                          ]
                        : [
                              <Button
                                  key={0}
                                  color="inherit"
                                  component={Link}
                                  to="/signup"
                              >
                                  Register
                              </Button>,
                              <Button
                                  key={1}
                                  color="inherit"
                                  component={Link}
                                  to="/login"
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

export default withStyles(styles)(TopNavbar);
