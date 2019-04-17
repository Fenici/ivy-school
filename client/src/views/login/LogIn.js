import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../variables/theme";

import LoginCard from "./LoginCard";
import LoginLayout from "./LoginLayout";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <LoginLayout>
          <LoginCard/>
        </LoginLayout>
      </MuiThemeProvider>
    );
  }
}

export default Login;
