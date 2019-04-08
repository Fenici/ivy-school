import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem
} from "@material-ui/core";

import NotificationsOutlined  from "@material-ui/icons/NotificationsOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
//
import Ivy from "../assets/newLogo.png";


const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#fff"
  },
  icon: {
    // width: 38,
    height: 38,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  }
});


class DbAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };
  

  render() {
    const anchorEl = this.state;
    const { classes } = this.props;

    const isMenuOpen = Boolean(anchorEl);
    //setting dropdown menu
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <NavLink to="/profile">
          {" "}
          <MenuItem onClick={this.handleMenuClose}>Personal Profile</MenuItem>
        </NavLink>
        <MenuItem onClick={this.handleMenuClose}>Change Password</MenuItem>
        <NavLink to="/">
          {" "}
          <MenuItem onClick={this.handleMenuClose}>Sign Out</MenuItem>
        </NavLink>
      </Menu>
    );

    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <img src={Ivy} className={classes.icon} alt="school-icon" />
            </Typography>

            <div className={classes.left} />
            {/* this can be dynamic change with Route  */}
            <h2>{"Dashboard"}</h2>

            <div className={classes.right}>
              <IconButton color="primary">
                <Badge badgeContent={7} color="error">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
              <IconButton
                color="primary"
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
              >
                <SettingsOutlined />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }
}


DbAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};
 
export default withStyles(styles)(DbAppBar);