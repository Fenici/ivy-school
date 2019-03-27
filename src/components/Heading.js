import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
  line: {
    border: "1px solid #DEE2E6"
  },
  titleHeading: {
    fontSize: 24,
    fontWeight: 400,
    
  }
});


function Heading(props) {
    const {headings,classes} = props

    return(
        <div>
            <Typography variant="h2" classes={{ h2: classes.titleHeading}}>
                {headings}
        </Typography>
            <hr className={classes.line}></hr>
        </div>

    )

}

Heading.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styles)(Heading);