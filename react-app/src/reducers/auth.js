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
        case "SIGN_IN_SUCCESS":
            return {
                ...state,
                userToken: action.body
            };
        default:
            return state;
    }
};
