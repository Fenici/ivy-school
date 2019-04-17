import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "../components/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Dialog } from "@material-ui/core";
import Dialogs from "./Dialogs";

const styles = theme => ({
  card: {
    maxWidth: 355,
    marginTop: 30,
    borderRadius: 10
  },
  cardHeader: {
    backgroundColor: "#649"
  },
  title: {
    color: "#fff"
  },
  dbButton: {
    fontSize: 14
  }
  // btCenter: {
  //   display: "flex",
  //   alignSelf: "stretch"
  // }
});

class CourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            title: classes.title
          }}
          title="Course Name"
          className={classes.cardHeader}
        />

        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="caption" component="h2">
              Course Desciption
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica...{" "}
              <Dialogs buttonNames="More Info" />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.btCenter}>
          <Button
            variant="extended"
            size="small"
            name="Material"
            className={classes.dbButton}
          />
          <Button
            variant="extended"
            size="small"
            name="Submission"
            className={classes.dbButton}
          />
          <Button
            variant="extended"
            size="small"
            name="Assignment"
            className={classes.dbButton}
          />
        </CardActions>
      </Card>
    );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseCard);
