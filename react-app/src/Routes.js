import React from "react";
import { Switch , Route} from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Signup from './containers/Signup';
import Login from './containers/Login';
import LinkTabs from './containers/LinkTabs';
import LinkComponent from './components/LinkComponent';
import ToolsContainer from './components/ToolsContainer';

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path='/signup' exact component={Signup} props={childProps} />
    <AppliedRoute path='/login' exact component={Login} props={childProps} />
    <AppliedRoute path='/knowledge' exact component={LinkTabs} props={childProps} />
    <AppliedRoute path='/link/' component={LinkComponent} props={childProps} />
    <Route path='/tool/:schema' component={ToolsContainer} props={childProps} />
  </Switch>
