const userReducerDefaultState = {
    username: "Topher",
    password: "P@ssw0rd",
    email: "topher.sikorra@gmail.com"
};

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                username: action.username
            };
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.password
            };
        case "SET_EMAIL":
            return {
                ...state,
                email: action.email
            };
        default:
            return state;
    }
};
