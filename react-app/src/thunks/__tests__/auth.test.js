import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { thunkSignIn } from "../auth";

global.fetch = require("jest-fetch-mock");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockUser = {
    username: "topher.sikorra@gmail.com",
    password: "p@ssw0rd!",
    attributes: {
        email: "topher.sikorra@gmail.com"
    }
};

describe("thunkSignIn", () => {
    const returnData = {};

    beforeEach(() => {
        fetch.resetMocks();
        fetch.mockResponseOnce(JSON.stringify(returnData));
    });
});
