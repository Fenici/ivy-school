import React from "react";
import Logo from "../../assets/newLogo.png";
// import {Link} from 'react-router-dom'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import Button from "../../components/LpButton";
import { Typography,Link} from "@material-ui/core";

const styles = theme => ({
  card: {
    minWidth: 640,
    minHeight: 380,
    marginTop: 35,
    borderRadius: 10,
    padding: 30,
    backgroundColor: "#ffffff",
    opacity: 0.7
  },

  media: {
    height: 190,
    width: 260,
    display: "flex",
    marginLeft: 350,
    marginTop: -250
  },

  issue: {
    marginLeft: 15
  },

  actions: {
    marginLeft: -45,
    marginTop: -30
  },

  title: {
    fontSize: 20,
    fontColor: "black",
    textDecoration: "underline"
  },

  button: {
    borderRadius: 10,
    marginLeft: 55,
    marginTop: 40
  },

  cssLabel: {
    "&$cssFocused": {
      color: purple[649]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[649]
    }
  }
});

class LogIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>Login</Typography>
          <br />
          <div>
            <FormControl onSubmit={this.handleSubmit}>
              <InputLabel
                htmlFor="username"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                Username/Email
              </InputLabel>
              <Input
                id="username"
                type="text"
                onChange={this.handleChange}
                classes={{
                  underline: classes.cssUnderline
                }}
              />
            </FormControl>
          </div>
          <br />

          <div className="form2">
            <FormControl onSubmit={this.handleSubmit}>
              <InputLabel
                htmlFor="password"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }}
              >
                Password
              </InputLabel>
              <Input
                id="password"
                type="password"
                onChange={this.handleChange}
                classes={{
                  underline: classes.cssUnderline
                }}
              />
            </FormControl>
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <Link href={"/Dashboard"}>
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              size="small"
            >
              Login
            </Button>
          </Link>

          <Link href={"/signup"}>
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              size="small"
            >
              Sign Up
            </Button>
          </Link>
        </CardActions>

        <br />
        <Link className={classes.issue}>Forgot Password?</Link>
        <CardMedia className={classes.media} title="logo" image={Logo} />
      </Card>
    );
  }
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogIn);
