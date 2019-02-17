import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import CustomersListPage from "./containers/CustomersListPage";
import LoginPage from "./containers/LoginPage";
const Routes=()=>(
    <Router>
    <div>
      <Route path="/login" component={LoginPage} />
      <Route path="/customers" component={CustomersListPage} />
      {/* <Route path="/tradies" component={TradiesList} />
      <Route path="/orders" component={OrdersList} /> */}
    </div>
  </Router>

)