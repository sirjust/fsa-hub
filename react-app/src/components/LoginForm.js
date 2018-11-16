import React, { Component } from "react";

export default class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    };

    render() {
        return (
            <React.Fragment>
                <p id="formErrors">
                    {this.props.errors ? this.props.errors.join(", ") : null}
                </p>
                <form className="loginForm" onSubmit={this.handleOnSubmit}>
                    <div className="formElement">
                        <label>Username</label>
                        <br />
                        <input
                            type="text"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <br />

                    <div className="formElement">
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleOnChange}
                        />
                        <br />
                        <button
                            className="light small"
                            onClick={this.props.forgotPassword}
                        >
                            Forgot password?
                        </button>
                    </div>

                    <input type="submit" value="Login" />
                </form>
            </React.Fragment>
        );
    }

    handleOnChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();

        if (!this.validateUsername(this.state.username)) {
            this.props.addErrors("Username is required");
            return;
        }

        this.props.handleOnSubmit(this.state);
    };

    validateUsername = username => {
        return username.length > 0;
    };
}
