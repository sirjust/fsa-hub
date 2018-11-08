import React, { Component } from 'react';

export default class ForgotPasswordForm extends Component {
  render(){
    return (
      <React.Fragment>
        <p className='light'>Enter your username below to receive a confirmation code via email.</p>
        <p id='formErrors'>
          {this.props.data.errors
            ? this.props.data.errors.join(', ')
            : null}
        </p>
        <form className='forgotPasswordForm' onSubmit={this.handleOnSubmit}>
          <div className='formElement'>
            <label>Username</label><br />
            <input type='text' id='username'
              value={this.props.data.username}
              onChange={this.props.handleOnChange} />
          </div><br />

          <input type='submit' value='Submit' />
        </form>
      </React.Fragment>
    )
  }

  handleOnSubmit = event => {
    event.preventDefault();
    if (!this.validateUsername(this.props.data.username)) {
      this.props.addError("Username is required");
      return;
    }
    this.props.handleOnSubmit();
  }

  validateUsername = username => {
    return username.length > 0;
  }
}