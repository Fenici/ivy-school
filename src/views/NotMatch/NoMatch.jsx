import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    height: "100vh",
    padding: "120px 0",
    textAlign: "center"
  },
  lgText: {
    fontSize: 60,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: "16px"
  }
});

class NoMatch extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} textAlign="center">
        <h1
          style={{
            fontSize: "3.75rem",
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: "16px"
          }}
        >
          404
        </h1>

        <p
          style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            margin: 0,
            padding: 0
          }}
        >
          Erorr!
        </p>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#70657b",
            marginBottom: "3rem",
            marginTop: "0"
          }}
        >
          Sorry! The page you were looking for doesn't exist
        </p>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="extended" size="Medium" name="Go back to home" />
        </Link>
      </div>
    );
  }
}

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NoMatch);
