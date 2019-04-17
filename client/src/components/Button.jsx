import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    color: "#fff",
    backgroundColor: "#649",
    fontSize: 12,
    fontWeight: 300
  },

  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class Button extends Component {
  state = {};
  render() {
    const { classes, variant, size, name } = this.props;
    return (
      <Fab
        variant={variant}
        size={size}
        color="primary"
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
