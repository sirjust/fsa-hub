export const signIn = ({ username = "", password = "" } = {}) => ({
    type: "SIGN_IN",
    username,
    password
});

export const forgotPassword = ({ email = "" } = {}) => ({
    type: "FORGOT_PASSWORD",
    email
});

export const resetPassword = ({
    email = "",
    confirmationCode = "",
    password = ""
} = {}) => ({
    type: "RESET_PASSWORD",
    email,
    confirmationCode,
    password
});

export const resendChangePasswordConfirmation = ({ email = "" } = {}) => ({
    type: "RESEND_CHANGE_PW_CONFIRMATION",
    email
});
