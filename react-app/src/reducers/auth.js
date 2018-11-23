const authReducerDefaultState = {
    userToken: null
};

export default (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case "AWAIT_SIGN_IN":
            return {
                ...state,
                isLoading: true
            };
        case "SIGN_IN":
            return {
                ...state
            };
        default:
            return state;
    }
};
