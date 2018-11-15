import React from "react";
import PaperTextField from "./PaperTextField";
import { connect } from "react-redux";
import { setPassword, setConfirmPassword } from "../actions/user";

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmPassword: ""
        };
    }
    render() {
        return this.props.variant === "password" ? (
            <PaperTextField
                autoComplete="new-password"
                fullWidth
                id="password"
                label="password"
                type="password"
                renderField={true}
                handleChange={this.handleChange}
                value={this.props.password}
                autoComplete="new-password"
            />
        ) : (
            <PaperTextField
                autoComplete="new-password"
                fullWidth
                id="password"
                label="confirm password"
                type="password"
                renderField={false}
                handleChange={this.confirmPassword}
                value={this.props.confirmPassword}
                autoComplete="new-password"
            />
        );
    }
    handleChange = event => {
        this.props.dispatch(setPassword(event.target.value));
    };
    confirmPassword = event => {
        this.props.dispatch(setConfirmPassword(event.target.value));
    };
}

const mapStateToProps = state => {
    console.log(state);
    return {
        password: state.user.password,
        confirmPassword: state.user.confirmPassword
    };
};

export default connect(mapStateToProps)(PasswordInput);
