const authReducerDefaultState = {
    userToken: null
};

export default (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case "SIGN_IN":
        default:
            return state;
    }
};
