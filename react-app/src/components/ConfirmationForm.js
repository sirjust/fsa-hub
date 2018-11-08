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
          </div> <br/>
            <input type='submit' value='Submit' />
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
    if (!this.validateCode(this.state.confirmationCode)) {
      this.props.addError("Confirmation code required");
      return;
    }
    this.props.handleOnSubmit(this.state);
  }

  validateCode = code => {
    const validCode = /[0-9]{6}/
    return validCode.test(code);
  }
}