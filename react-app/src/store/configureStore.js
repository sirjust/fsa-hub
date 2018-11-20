import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "../reducers/user";
import authFormReducer from "../reducers/authForm";
import { thunkSignIn } from "../thunks/auth";
import thunk from "redux-thunk";

export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
            auth: thunkSignIn,
            authForm: authFormReducer
        }),
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
