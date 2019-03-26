import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SchoolHeroLayout from "./SchoolHeroLayout";
import { Typography, Grid } from "@material-ui/core";
import Button from "../../components/LpButton";
import Link from "@material-ui/core/Link";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Ins from "../../assets/Ins.png";

//Background image in landing page 
const backgroundImage =
  "https://www.uts.edu.au/sites/default/files/AlumniGreen_1.jpg";


  //get the style down
const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#ffffff", // Average color of the background image.
    backgroundPosition: "center",
    overflow: "Hidden"
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
  },
  icons: {
    display: "flex"
  },
  icon: {
    // width: 38,
    height: 38,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing.unit,
    marginTop: "15px",
    "&:hover": {
      // backgroundColor: "#649"
    }
  },
  iconSize: {}
});

function SchoolHero(props) {
  const { classes } = props;

  return (

    // background and overflowed text from school hero layout 
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

        {/* Social Media */}
      <Grid item className={classes.icons}>
        <a href="https://facebook.com/" className={classes.icon}>
          <img src={Facebook} alt="Facebook" className={classes.icon} />
        </a>
        <a href="https://twitter.com/" className={classes.icon}>
          <img src={Twitter} alt="Twitter" className={classes.icon} />
        </a>
        <a href="https://twitter.com/" className={classes.icon}>
          <img src={Ins} alt="Twitter" className={classes.icon} />
        </a>
      </Grid>
    </SchoolHeroLayout>
  );
}

SchoolHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SchoolHero);
