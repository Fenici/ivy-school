import React, { Component } from "react";
import theme from "../../variables/theme";
import { MuiThemeProvider } from "@material-ui/core";
import MainBar from "./MainBar";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MainBar />
      </MuiThemeProvider>
    );
  }
}

export default Result;
