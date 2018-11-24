import React from "react";
import { connect } from "react-redux";
import { setUsername, setPassword } from "../actions/user";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
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
                            value={this.props.username}
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
                            value={this.props.password}
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
        switch (event.target.id) {
            case "username":
                this.props.dispatch(setUsername(event.target.value));
                break;
            case "password":
                this.props.dispatch(setPassword(event.target.value));
                break;
            default:
        }
    };

    handleOnSubmit = event => {
        event.preventDefault();
        if (!this.validateUsername(this.props.username)) {
            this.props.addErrors("Username is required");
            return;
        }
        this.props.handleOnSubmit();
    };

    validateUsername = username => {
        return username.length > 0;
    };
}

const mapStateToProps = state => ({
    email: state.user.email,
    username: state.user.username,
    password: state.user.password
});

export default connect(mapStateToProps)(LoginForm);
