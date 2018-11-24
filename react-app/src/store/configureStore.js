import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import userReducer from "../reducers/user";
import authFormReducer from "../reducers/authForm";
import authReducer from "../reducers/auth";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools";

export default () => {
    const combinedReducers = combineReducers({
        user: userReducer,
        auth: authReducer,
        authForm: authFormReducer
    });
    const store = createStore(
        combinedReducers,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
};
