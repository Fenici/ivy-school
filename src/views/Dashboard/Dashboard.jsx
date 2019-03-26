import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../variables/theme";

import MainAppBar from "../../components/MainAppBar";

class Dashboard extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MainAppBar />
      </MuiThemeProvider>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Dashboard;
