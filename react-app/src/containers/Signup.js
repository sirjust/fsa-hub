import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { thunkSignIn } from "../thunks/auth";

import RegistrationForm from "../components/RegistrationForm";
import ConfirmationForm from "../components/ConfirmationForm";

export default class Signup extends Component {
    state = {
        confirmationRequired: false,
        errors: []
    };

    render() {
        return (
            <div className="App-intro">
                <h1>Join Full-Stack Apprentice</h1>
                <p className="light">
                    Learn to create modern & secure digital products
                </p>
                <br />
                <br />

                {/* This loads a registration form, and upon successful registration
        changes to load a form to submit a confirmation code.  */}
                {this.state.confirmationRequired ? (
                    <ConfirmationForm
                        handleOnSubmit={this.handleOnConfirmationSubmit}
                        errors={this.state.errors}
                        addError={this.addError}
                    />
                ) : (
                    <RegistrationForm
                        handleOnSubmit={this.handleOnRegistrationSubmit}
                        errors={this.state.errors}
                        addError={this.addError}
                    />
                )}
            </div>
        );
    }

    handleOnChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleOnRegistrationSubmit = data => {
        const username = data.username;
        const email = data.email;
        const password = data.password;
        this.setState({
            errors: []
        });
        //Register user with Auth aws-amplify
        Auth.signUp({
            username,
            password,
            attributes: {
                email
            }
        })
            .then(data => {
                console.log(data);
                this.setState({
                    username: data.user.username,
                    confirmationRequired: true
                });
                //This returns a user object in the form of:
                /* user: Object { username: "queer_coder", pool: {…}
                 *             authenticationFlowType: "USER_SRP_AUTH", … }
                 *   userConfirmed: false
                 *   userSub: "3d144a73-0337-4472-a6b3-39f05ac5af8b"
                 */
                //Users must be confirmed with an emailed verification code
                //Flow: set state for user/error, change form component
            })
            .catch(err => {
                console.log(err);
                const errorMessages = err.message ? err.message : err;
                this.setState(state => {
                    return { errors: state.errors.concat(errorMessages) };
                });
            });
    };

    handleOnConfirmationSubmit = data => {
        const code = data.confirmationCode;
        const username = this.state.username;
        this.setState({
            errors: []
        });

        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        })
            .then(data => {
                console.log(data);
                // Returns "SUCCESS" on successful confirmation.
                //TODO: do something with newly authenticated user
                alert("Account confirmed! Please log in.");
                this.props.history.push("/login");
            })
            .catch(err => {
                console.log(err);
                const errorMessages = err.message ? err.message : err;
                this.setState(state => {
                    return { errors: state.errors.concat(errorMessages) };
                });
            });
    };

    addError = error => {
        this.setState(state => {
            return { errors: state.errors.concat(error) };
        });
    };
}

const mapStateToProps = state => ({});
