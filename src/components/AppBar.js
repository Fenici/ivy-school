import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles'
import LandingAppBar from "@material-ui/core/AppBar";


const styles = theme => ({
    root: {
        color: theme.palette.common.white,
    },
});

function AppBar(props) {
    
    return <LandingAppBar elevation={0} position="static" {...props} />;
}

AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
