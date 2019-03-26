import React from "react";
import "./login.css";
import Dome from "../../assets/loginBkground.png";
import Logo from "../../assets/newLogo.png";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import Button from "../../components/LpButton";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },

  button: {
    borderRadius: 10,
    marginLeft: 65,
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
      <div className="background">
        <img className="back" alt="background-img" src={Dome} />

        <div className="container">
          <h2>Login</h2>
          <img className="logo" alt="" src={Logo} />
          <div className="form1">
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
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            size="medium">
            Login
          </Button>
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            size="medium">
            Signup
          </Button>
          <h3 className='txt1'>Forgot Password?</h3> 
        </div>
      </div>
    );
  }
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogIn);
