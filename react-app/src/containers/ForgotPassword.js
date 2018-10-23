import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import ResetPasswordForm from '../components/ResetPasswordForm';

export default class ForgotPassword extends Component {

  state = {
    username: '',
    code: '',
    newPassword: '',
    confirmationPending: false,
    errors: []
  }

  render() {
    return(
      <React.Fragment>
        {this.state.confirmationPending
          ? <ResetPasswordForm data={this.state} 
              handleOnChange={this.handleOnChange} 
              handleOnSubmit={this.handleOnResetSubmit}
              addErrors={this.addErrors}
              clearErrors={this.clearErrors} />
          : <ForgotPasswordForm data={this.state} 
              handleOnChange={this.handleOnChange} 
              handleOnSubmit={this.handleOnUsernameSubmit}
              addErrors={this.addErrors}
              clearErrors={this.clearErrors} />}
      </React.Fragment>
    )
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnUsernameSubmit = event => {
    event.preventDefault();
    this.clearErrors();
    const username = this.state.username;

    Auth.forgotPassword(username)
      .then(data => {
        console.log(data);
        this.setState({
          confirmationPending: true
        });
      })
      .catch(err => {
        err.message ? this.addErrors(err.message) : this.addErrors(err)
      });
  }

  handleOnResetSubmit = event => {
    event.preventDefault();
    this.clearErrors();
    const username = this.state.username;
    const code = this.state.code;
    const newPassword = this.state.newPassword;

    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then(data => {
        console.log(data);
        this.setState({
          confirmationPending: false
        });
        this.props.resetForgotPassword();
        alert("Password changed successfully.");
      })
      .catch(err => {
        err.message ? this.addErrors(err.message) : this.addErrors(err)
      });
  }

  addErrors = errors => {
    this.setState(state => {
      return {
        errors: state.errors.concat(errors)
      }
    });
  }

  clearErrors = () => {
    this.setState({
      errors: []
    });
  }
}