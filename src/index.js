import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './index.css'
//
import LandingPage from "./views/Auth/LandingPage"
import Dashboard from "./views/Dashboard/Dashboard";
import Announcement from "./views/Announcement/Announcement";
import Grade from "./views/Result/Result";
import Setting from "./views/Setting/Setting"
import NoMatch from "./views/NotMatch/NoMatch"

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/announce" component={Announcement} />
      <Route path="/result" component={Grade} />
      <Route path="/setting" component={Setting} />
      <Route component={NoMatch} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
