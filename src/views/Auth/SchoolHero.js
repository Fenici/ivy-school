import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SchoolHeroLayout from "./SchoolHeroLayout";
import { Typography, Fab } from "@material-ui/core";
import Button from "../../components/LpButton";
import Link from "@material-ui/core/Link";

const backgroundImage =
  "https://www.uts.edu.au/sites/default/files/sci-sci-gsh-building-architect-render-jonestreet.jpg";
const styles = theme => ({
  background: {
        backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#ffffff", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing.unit * 10
    }
  },
  more: {
    marginTop: theme.spacing.unit * 2
  }
});

function SchoolHero(props) {
  const { classes } = props;

  return (
    <SchoolHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        The School For Excellence
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Ivy School Spring Semester Start Enroll Now
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => (
          <Link {...linkProps} href="#" variant="button" />
        )}
      >
        Enroll Now
      </Button>

      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the elite eduction
      </Typography>
    </SchoolHeroLayout>
  );
}

SchoolHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SchoolHero);
