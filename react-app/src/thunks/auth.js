import { Auth } from "aws-amplify";

//Sign In
export const authSignIn = ({ username = "", password = "" }) => {
    return Auth.signIn(username, password);
};

export const signIn = ({ username = "", password = "" } = {}) => ({
    type: "SIGN_IN",
    username,
    password
});
export const signInSuccess = () => ({
    type: "SIGN_IN_SUCCESS"
});
export const signInUserNotFound = () => ({
    type: "SIGN_IN_USER_NOT_FOUND"
});
export const signInWrongPassword = () => ({
    type: "SIGN_IN_WRONG_PASSWORD"
});
export const signInNotConfirmed = () => ({
    type: "SIGN_IN_NOT_CONFIRMED"
});

export const thunkSignIn = ({ username = "", password = "" } = {}) => {
    return function(dispatch, getState) {
        dispatch(
            authSignIn({ username, password })
                .then(data => {
                    console.log(data);
                })
                .error(err => {
                    console.log(err);
                })
        );
    };
};

export const authForgotPassword = ({ email = "" } = {}) => ({
    type: "FORGOT_PASSWORD",
    email
});
export const authForgotPasswordSubmit = ({
    email = "",
    confirmationCode = "",
    password = ""
} = {}) => ({
    type: "FORGOT_PASSWORD_SUBMIT",
    email,
    confirmationCode,
    password
});

//Sign Up
export const authSignUp = ({
    username = "",
    password = "",
    email = ""
} = {}) => ({
    type: "SIGN_UP",
    username,
    password,
    email
});
export const authConfirmSignUp = ({
    username = "",
    confirmationCode = ""
} = {}) => ({
    type: "CONFIRM_SIGN_UP",
    username,
    confirmationCode
});
export const authResendSignUp = ({ email = "" } = {}) => ({
    type: "RESEND_SIGN_UP",
    email
});

//Auth Actions
export const authCurrentAuthenticatedUser = () => ({
    type: "CURRENT_AUTHENTICATED_USER"
});
export const authSignOut = () => ({
    type: "SIGN_OUT"
});
