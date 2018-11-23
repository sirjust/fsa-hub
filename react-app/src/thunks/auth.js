import { Auth } from "aws-amplify";

//Sign In
const authSignIn = ({ username = "", password = "" }) => {
    return Auth.signIn(username, password);
};
const awaitSignIn = () => ({
    type: "AWAIT_SIGN_IN"
});
export const signInSuccess = body => ({
    type: "SIGN_IN_SUCCESS",
    body
});
export const signInUserNotFound = err => ({
    type: "SIGN_IN_USER_NOT_FOUND",
    err
});
export const signInWrongPassword = err => ({
    type: "SIGN_IN_WRONG_PASSWORD",
    err
});
export const signInNotConfirmed = err => ({
    type: "SIGN_IN_NOT_CONFIRMED",
    err
});

export const thunkSignIn = ({ username = "", password = "" } = {}) => {
    return function(dispatch, getState) {
        dispatch(awaitSignIn());
        return authSignIn({ username, password })
            .then(data => {
                console.log(data);
                dispatch(signInSuccess());
            })
            .error(err => {
                console.log(err);
            });
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
