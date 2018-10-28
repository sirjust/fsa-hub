import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import LoginForm from '../components/LoginForm';
import ForgotPassword from './ForgotPassword';

export default class Login extends Component {

  state = {
    forgotPassword: false,
    errors: []
  }

  render() {
    return(
      <React.Fragment>
        <div className='App-intro'>
          <h1>Login to Full-Stack Apprentice</h1>
          <p className='light'>Learn to create modern & secure digital products</p><br />
          {this.state.forgotPassword
            ? <ForgotPassword resetForgotPassword={this.resetForgotPassword}/>
            : <LoginForm handleOnSubmit={this.handleOnLoginSubmit}
              forgotPassword={this.forgotPassword}
              errors={this.state.errors} />
          } 
        </div>
      </React.Fragment>
    )
  }

  handleOnLoginSubmit = data => {
    Auth.signIn(data.username, data.password)
      .then(user => {
        const token = user.signInUserSession.idToken;
        this.props.loginUser(token);
        this.props.history.push('/');
      })
      .catch(err => {
        err.message ? this.addErrors(err.message) : this.addErrors(err);
      });
  }

  forgotPassword = () => {
    this.setState({
      forgotPassword: true
    });
  }

  resetForgotPassword = () => {
    this.setState({
      forgotPassword: false
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