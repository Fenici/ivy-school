import React, { Component } from "react";
import LpAppBar from "./LpAppBar";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../variables/theme";
import SchoolHero from "./SchoolHero";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LpAppBar />;
        <SchoolHero />
      </MuiThemeProvider>
    );
  }
}

export default LandingPage;
