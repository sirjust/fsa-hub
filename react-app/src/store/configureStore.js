import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/user";
import authReducer from "../reducers/auth";

export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
            auth: authReducer
        })
    );
    return store;
};
