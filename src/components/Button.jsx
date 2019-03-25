import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    color: "#fff",
    backgroundColor: "#649"
  },

  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class Button extends Component {
  state = {};
  render() {
    const { classes, variant, size, color, name } = this.props;
    return (
      <Fab
        variant={variant}
        size={size}
        color="649"
        aria-label="Redirect"
        className={classes.margin}
      >
        {name}
      </Fab>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Button);
