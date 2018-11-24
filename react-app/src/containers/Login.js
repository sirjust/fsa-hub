import React from "react";
import LoginForm from "../components/LoginForm";
import ForgotPassword from "./ForgotPassword";

import { connect } from "react-redux";
import { thunkSignIn } from "../thunks/auth";

class Login extends React.Component {
    state = {
        forgotPassword: false,
        errors: []
    };

    render() {
        return (
            <div className="App-intro">
                <h1>Login to Full-Stack Apprentice</h1>
                <p className="light">
                    Learn to create modern & secure digital products
                </p>
                <br />
                {this.state.forgotPassword ? (
                    <ForgotPassword
                        resetForgotPassword={this.resetForgotPassword}
                    />
                ) : (
                    <LoginForm
                        handleOnSubmit={this.handleOnLoginSubmit}
                        forgotPassword={this.forgotPassword}
                        errors={this.state.errors}
                        addErrors={this.addErrors}
                    />
                )}
            </div>
        );
    }

    handleOnLoginSubmit = () => {
        this.props.dispatch(
            thunkSignIn({
                username: this.props.username,
                password: this.props.password
            })
        );
        // Auth.signIn(data.username, data.password)
        //     .then(user => {
        //         const token = user.signInUserSession.idToken;
        //         this.props.loginUser(token);
        //         this.props.history.push("/");
        //     })
        //     .catch(err => {
        //         err.message ? this.addErrors(err.message) : this.addErrors(err);
        //     });
    };

    forgotPassword = () => {
        this.setState({
            forgotPassword: true
        });
    };

    resetForgotPassword = () => {
        this.setState({
            forgotPassword: false
        });
    };

    addErrors = errors => {
        this.setState(state => {
            return {
                errors: state.errors.concat(errors)
            };
        });
    };

    clearErrors = () => {
        this.setState({
            errors: []
        });
    };
}

const mapStateToProps = state => ({
    username: state.user.username,
    password: state.user.password
});

export default connect(mapStateToProps)(Login);
