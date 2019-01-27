import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/configureStore";

import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import LinkTabs from "./containers/LinkTabs";
import LinkComponent from "./components/LinkComponent";
import ToolsContainer from "./components/ToolsContainer";
import NewResource from "./containers/NewResource";
import ProcessResource from "./containers/ProcessResource";

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <AppliedRoute path="/" exact component={LinkTabs} />
            <AppliedRoute path="/link/:id" component={LinkComponent} />
            <AppliedRoute path="/tool/:schema" component={ToolsContainer} />
            <AppliedRoute path='/resource/new' exact component={NewResource} props={history} />
            <AppliedRoute path='/review' exact component={ProcessResource} />
        </Switch>
    </ConnectedRouter>
);
