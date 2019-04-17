import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Status from "@material-ui/icons/NotificationsOutlined";
import orange from '@material-ui/core/colors/orange';


import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#914499',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

let id = 0;
function createData(course, status, gpa, time, credit, view) {
  id += 1;
  return { id, course, status, gpa, time, credit, view };
}



const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },

  palette: {
    secondary: {
      main: orange[500],
    },

  table: {
    minWidth: 700
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },

  margin: {
    marginTop: 35
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
}});

const rows = [
  createData("Course one"
, 'In Progress', '-', '-', <Link>View</Link>),
  createData("Course two", 'Pass', '89/100', 37, <Link>View</Link>),
  createData("Course three", 'Pass', '79/100', 24, <Link>View</Link>),
  createData("Course four", 'Pass', '96/100', 67, <Link>View</Link>),
];

class ResultCard extends React.Component {


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
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Course Title</CustomTableCell>
            <CustomTableCell align="right">Status</CustomTableCell>
            <CustomTableCell align="right">GPA</CustomTableCell>
            <CustomTableCell align="right">Time Enrolled</CustomTableCell>
            <CustomTableCell align="right">Action</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.course}
              </CustomTableCell>
              <CustomTableCell align="right">{row.status}</CustomTableCell>
              <CustomTableCell align="right">{row.gpa}</CustomTableCell>
              <CustomTableCell align="right">{row.time}</CustomTableCell>
              <CustomTableCell align="right">{row.credit}</CustomTableCell>
              <CustomTableCell align="right">{row.view}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

ResultCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultCard);
