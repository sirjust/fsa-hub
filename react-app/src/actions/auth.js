//  Resources used:
//  https://redux.js.org/advanced/asyncactions

//Sign In
export const authSignIn = ({ username = "", password = "" } = {}) => ({
    type: "SIGN_IN",
    username,
    password
});
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
