import React, { Component } from 'react';

export default class RegistrationForm extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  render() {
    return(
      <React.Fragment>
        <h3>Create your personal account</h3>
        <form className='signupForm' onSubmit={this.handleOnSubmit}>
          <p id='formErrors'>{this.renderErrors()}</p>
          <div className='formElement'>
            <label>Username</label><br />
            <input type='text' id='username'
              value={this.state.username}
              onChange={this.handleOnChange} />
            <p className='light small'>This will be your public username.</p>
          </div>

          <div className='formElement'>
            <label>Email</label><br />
            <input type='email' id='email'
              value={this.state.email}
              onChange={this.handleOnChange} />
            <p className='light small'>You'll need to confirm your account using this address. We'll never share your email address with anyone.</p>
          </div>

          <div className='formElement'>
            <label>Password</label><br />
            <input type='password' id='password'
              value={this.state.password}
              onChange={this.handleOnChange} />
            <p className='light small'>Make sure this is at least 8 characters, including a number, an uppercase character, and a symbol.</p>
          </div>

          <input type='submit' value='Register' />
        </form>
      </React.Fragment>
    )
  }

  renderErrors = () => {
    if (this.props.errors) {
      return this.props.errors.join(', ')
    }
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