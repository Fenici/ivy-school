import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import InputBase from "@material-ui/core/InputBase";

import { Avatar, Grid, MenuItem } from "@material-ui/core";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ButtonP from "../../components/LpButton";
import ButtonG from "../../components/GrButton";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  card: {
    marginTop: 50,
    marginLeft: 35,
    marginRight: 35,
    padding: 30,
    backgroundColor: "transparent"
  },
  margin: {
    marginTop: 35
  },

  avatar: {
    flexGrow: 1,
    display: "block"
  },

  avatarImage: {
    marginLeft: 20,
    minWidth: 70,
    minHeight: 70
  },

  action1: {
    marginLeft: 100,
    marginTop: -105
  },

  action2: {
    marginBottom: 20,
    marginLeft: -45
  },

  buttonPurple: {
    borderRadius: 10,
    marginLeft: 55,
    marginTop: 40
  },

  buttonGrey: {
    borderRadius: 10,
    marginLeft: 55,
    marginTop: 40
  },

  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 4
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: 700,
    padding: "8px 8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: "nunito",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#664499",
      boxShadow: "0 0 0 0.2rem rgba(66,44,99,.15)"
    }
  },
  bootstrapFormLabel: {
    fontFamily: "Nunito",
    fontSize: 26,
    color: "black"
  }
});

class SettingCard extends React.Component {
  state = {
    fullname: "",
    email: "",
    address: "",
    contact: "",
    identity: ""
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
        <Grid item className={classes.avatar}>
          <Avatar className={classes.avatarImage}>H</Avatar>
        </Grid>
        <CardActions className={classes.action1}>
          <ButtonP
            className={classes.buttonPurple}
            label={classes.label}
            color="secondary"
            variant="contained"
            size="small"
          >
            Upload
          </ButtonP>
          <ButtonG
            className={classes.buttonGrey}
            color="secondary"
            variant="contained"
            size="small"
          >
            Delete
          </ButtonG>
        </CardActions>

        <CardContent>
          <FormControl className={classes.margin} onSubmit={this.handleSubmit}>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={classes.bootstrapFormLabel}
            >
              Full Name
            </InputLabel>
            <InputBase
              value={this.state.name}
              onChange={this.handleChange}
              id="bootstrap-input"
              defaultValue=""
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput
              }}
            />
          </FormControl>

          <FormControl className={classes.margin} onSubmit={this.handleSubmit}>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={classes.bootstrapFormLabel}
            >
              Email
            </InputLabel>
            <InputBase
              value={this.state.email}
              id="bootstrap-input"
              defaultValue=""
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput
              }}
            />
          </FormControl>

          <FormControl className={classes.margin} onSubmit={this.handleSubmit}>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={classes.bootstrapFormLabel}
            >
              Mailing Address
            </InputLabel>
            <InputBase
              id="bootstrap-input"
              defaultValue=""
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput
              }}
            />
          </FormControl>

          <FormControl className={classes.margin} onSubmit={this.handleSubmit}>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={classes.bootstrapFormLabel}
            >
              Contact Number
            </InputLabel>
            <InputBase
              id="bootstrap-input"
              defaultValue=""
              classes={{
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput
              }}
            />
          </FormControl>

          <FormControl className={classes.margin} onSubmit={this.handleSubmit}>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              className={classes.bootstrapFormLabel}
            >
              To Which Gender Identity Do You Most Identify
            </InputLabel>
            <Select
              value={this.state.identity}
              onClick={event => this.setState({ identity: event.target.value })}
              name="identity"
              displayEmpty
              className={classes.bootstrapRoot}
              classes={{
                root: classes.bootstrapRoot,
                select: classes.bootstrapInput
              }}
            >
              <MenuItem value="" disabled>
                Please select
              </MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="trans">Other</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardActions className={classes.action2}>
          <ButtonP
            onClick={this.handleSubmit}
            className={classes.buttonPurple}
            label={classes.label}
            color="secondary"
            variant="contained"
            size="small"
          >
            Update
          </ButtonP>
          <ButtonG
            className={classes.buttonGrey}
            color="secondary"
            variant="contained"
            size="small"
          >
            Cancel
          </ButtonG>
        </CardActions>
      </Card>
    );
  }
}

SettingCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SettingCard);
