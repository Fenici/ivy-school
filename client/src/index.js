import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './index.css'
import LandingPage from "./views/Auth/LandingPage"
import LogIn from "./views/login/LogIn";
import SignUp from "./views/login/SignUp";

import Dashboard from "./views/Dashboard/Dashboard";
import Grade from "./views/Result/Result";
import Setting from "./views/Setting/Setting"
import NoMatch from "./views/NotMatch/NoMatch"

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/grade" component={Grade} />
      <Route path="/settings" component={Setting} />
      <Route component={NoMatch} />
    </Switch>
  </Router>,
  document.getElementById("root")
);