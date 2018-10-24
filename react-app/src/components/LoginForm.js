import React, { Component } from 'react';

export default class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    errors: []
  }

  render() {
    return(
      <React.Fragment>
        <p id='formErrors'>
          {this.props.errors
            ? this.props.errors.join(', ')
            : null}
        </p>
        <form className='loginForm' onSubmit={this.handleOnSubmit}>
          <div className='formElement'>
            <label>Username</label><br />
            <input type='text' id='username'
              value={this.state.username}
              onChange={this.handleOnChange} />
          </div><br />

          <div className='formElement'>
            <label>Password</label><br />
            <input type='password' id='password'
              value={this.state.password}
              onChange={this.handleOnChange} /><br />
            <a className='light small' onClick={this.props.forgotPassword}>Forgot password?</a>
          </div>

          <input type='submit' value='Login' />
        </form>
      </React.Fragment>
    );
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.handleOnSubmit(this.state);
  }
}