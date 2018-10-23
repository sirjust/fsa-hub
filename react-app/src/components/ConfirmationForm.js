import React, { Component } from 'react';

export default class ConfirmationForm extends Component {

  state = {
    confirmationCode: ''
  }

  render() {
    return(
      <React.Fragment>
        <h3>Check your email for a confirmation code and enter below</h3>
        <form className='confirmationForm' onSubmit={this.handleOnSubmit}>
          <p id='formErrors'>{this.renderErrors()}</p>
          <div className='formElement'>
            <label>Confirmation Code</label><br />
            <input type='text' id='confirmationCode'
                  value={this.state.confirmationCode}
                  onChange={this.handleOnChange} />
            <p className='light small'>Message</p>

            <input type='submit' value='Submit' />
          </div>
        </form>
      </React.Fragment>
    )
  }

  renderErrors = () => {
    if (this.props.errors) {
      return this.props.errors.join(', ');
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