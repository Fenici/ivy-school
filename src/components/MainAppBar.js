import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {  CssBaseline, IconButton, Badge } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

import Ivy from '../assets/newLogo.png'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#EFF3F6"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    background: "#444D99",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    // width: 38,
    height: 38,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
  },
});

class MainAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {classes } = this.props
    return (<div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="#fff">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <img src={Ivy} className={classes.icon} alt="school-icon"></img>
              </Typography>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
              
                <MailIcon />
                
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              // aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Typography variant="h4" gutterBottom component="h2">
          Main Content
            </Typography>
      </main>
    </div> );
  }
}
 


MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainAppBar);
