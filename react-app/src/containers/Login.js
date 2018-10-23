import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  render() {
    return(
      <React.Fragment>
        <div className='App-intro'>
          <h1>Login to Full-Stack Apprentice</h1>
          <p className='light'>Learn to create modern & secure digital products</p><br /><br />

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
                     onChange={this.handleOnChange} />
            </div><br />

            <input type='submit' value='Login' />
          </form>
        </div>
      </React.Fragment>
    )
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);

    Auth.signIn(data.username, data.password)
      .then(user => {
        console.log(user);
        const token = user.signInUserSession.idToken.jwtToken;
        this.props.loginUser(token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
}