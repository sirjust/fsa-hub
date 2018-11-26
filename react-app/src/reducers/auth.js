const authReducerDefaultState = {
    isLoading: false,
    userToken: null,
    isAuthenticated: false
};

export default (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case "WAIT_A_SEC":
            return {
                ...state,
                isLoading: true
            };
        case "DONE_LOADING":
            return {
                ...state,
                isLoading: false
            };
        case "CURRENT_AUTHENTICATED_USER":
            return {
                ...state,
                userToken: action.userToken,
                isAuthenticated: true,
                test: action.userToken
            };
        case "USER_NOT_AUTHENTICATED":
            return {
                ...state,
                userToken: null,
                isAuthenticated: false
            };
        case "CONFIRM_SIGN_UP":
            return {
                ...state
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
            return { ...state };
    }
};
