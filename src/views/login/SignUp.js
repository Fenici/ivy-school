import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../variables/theme";

import SignupCard from "./SignupCard";
import LoginLayout from "./LoginLayout";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <LoginLayout>
          <SignupCard/>
        </LoginLayout>
      </MuiThemeProvider>
    );
  }
}

export default Signup;
