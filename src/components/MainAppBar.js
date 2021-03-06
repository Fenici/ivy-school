import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Routes from '../Routes.jsx'
import {
  CssBaseline,
  IconButton,
  Badge,
  Avatar,
  Grid,
  Menu,
  MenuItem
} from "@material-ui/core";

import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import TableChartOutlined from "@material-ui/icons/TableChartOutlined";
import GradeOutlined from "@material-ui/icons/GradeOutlined";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";

import Ivy from "../assets/newLogo.png";
import CourseCard from "./CourseCard";
import Heading from "./Heading";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#EFF3F6"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    paddingTop: 100
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
    }),
    backgroundColor:'#fff'
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
    alignItems: "center"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  item: {
    height: 80,
    paddingTop: 4,
    paddingBottom: 4
    // color: "rgba(255, 255, 255, 0.7)"
  },
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    color: "#fff",
    fontWeight: theme.typography.fontWeightLight,
    fontSize: theme.typography.fontSize,
    // "&$textDense": {
    //   fontSize: theme.typography.fontSize
    // }
  },
  navIcon: {
    color: "#fff"
  },
  avatar: {
    flexGrow: 1,
    display: "block"
  },
  avatarImage: {
    marginLeft: 20,
    marginRight: 15
  },
  info:{
    flexGrow:2
  },
  welcome: {
    fontSize: "2.5rem "
  },


});

// const categories = [
//   { id: "Dashboard", icon: <TableChartOutlined />, active: true ,path:"/dashboard"},
//   { id: "Grade", icon: <GradeOutlined /> ,path:"/grade"},
//   { id: "Settings", icon: <SettingsOutlined /> ,path:"/setting"},
//   { id: "SignIn", icon: <ExitToAppOutlined/>, path:"/signin" }
// ];

class MainAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { archorEl: null };
  }
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const { classes } = this.props;

    //setting dropdown menu
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
       <NavLink to='/profile'> <MenuItem onClick={this.handleMenuClose}>Personal Profile</MenuItem></NavLink>
        <MenuItem onClick={this.handleMenuClose}>Change Password</MenuItem>
        <NavLink to="/">
          {" "}
          <MenuItem onClick={this.handleMenuClose}>Sign Out</MenuItem>
        </NavLink>
      </Menu>
    );

    
    return (
      <div className={classes.root}>
        <CssBaseline />
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
        {/* Sidebar Like Drawer */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <Grid container spacing={16}>
            <Grid item className={classes.avatar}>
              <Avatar className={classes.avatarImage}>H</Avatar>
            </Grid>
            <Grid className={classes.info}>
              <Typography
                className="class.welcome"
                variant="h6"
                color="secondary"
              >
                {"Welcome"}
              </Typography>
              <Typography className="class.name" color="secondary">
                {"Joe.Smith"}
              </Typography>
              <Typography className="class.role" color="secondary">
                {"Student"}
              </Typography>
            </Grid>
          </Grid>

          <List>
            {Routes.map(({ id: childId, icon, active, path }) => (
              <NavLink to={path} key={childId}>
                <ListItem
                  button
                  dense
                  key={childId}
                  className={classNames(
                    classes.item,
                    classes.itemActionable,
                    active && classes.itemActiveItem
                  )}
                >
                  <ListItemIcon className={classes.navIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary
                      // textDense: classes.textDense
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </NavLink>
            ))}
          </List>

          <div className={classes.toolbar} />
        </Drawer>
        {renderMenu}
        {/* Below Is Main Content */}

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Heading headings="Course" />

                    {/* this can be change to mapping */}
          <div className="classes.gridRoot">
            <Grid container spacing={8}>
              <Grid item xs>
                <CourseCard
                  courseTitle={"Programming 101"}
                  courseContent={
                    "This is a fundamental course on programming."
                  }
                  materialLink={"#"}
                  submissionLink={"#"}
                  assignmentLink={"#"}
                />
              </Grid>

              <Grid item xs >

              <CourseCard
                courseTitle={"Programming 201"}
                courseContent={
                  "This is a fundamental course on programming."
                }
                materialLink={"#"}
                submissionLink={"#"}
                assignmentLink={"#"}
              />

              </Grid>
              <Grid item xs >

              <CourseCard
                courseTitle={"Programming 301"}
                courseContent={
                  "This is a fundamental course on programming."
                }
                materialLink={"#"}
                submissionLink={"#"}
                assignmentLink={"#"}
              />
              </Grid>
              <Grid item xs >

              <CourseCard
                courseTitle={"Programming 401"}
                courseContent={
                  "This is a fundamental course on programming."
                }
                materialLink={"#"}
                submissionLink={"#"}
                assignmentLink={"#"}
              />
              </Grid>
            </Grid>
          </div>
        </main>
      </div>
    );
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainAppBar);
