import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/user";
import authReducer from "../reducers/auth";
import authFormReducer from "../reducers/authForm";

export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
            auth: authReducer,
            authForm: authFormReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
