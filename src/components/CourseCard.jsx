import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "../components/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Dialog, Link } from "@material-ui/core";
// import Dialogs from "./Dialogs";

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
    const {
      classes,
      courseTitle,
      courseContent,
      materialLink,
      submissionLink,
      assignmentLink
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            title: classes.title
          }}
          title={courseTitle}
          className={classes.cardHeader}
        />

        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="caption" component="h2">
              Course Desciption
            </Typography>
            <Typography component="p">
              {courseContent}
              {/* <Dialogs buttonNames="More Info" /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.btCenter}>
          <Link href={materialLink}>
            <Button
              variant="extended"
              size="small"
              name="Material"
              className={classes.dbButton}
            />
          </Link>

          <Link href={submissionLink}>
            <Button
              variant="extended"
              size="small"
              name="Submission"
              className={classes.dbButton}
            />
          </Link>
          <Link href={assignmentLink}>
            <Button
              variant="extended"
              size="small"
              name="Assignment"
              className={classes.dbButton}
            />
          </Link>
        </CardActions>
      </Card>
    );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseCard);
