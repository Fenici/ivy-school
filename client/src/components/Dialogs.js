import React, { Component } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText,DialogActions, Typography } from '@material-ui/core';

class Dialogs extends Component {
    state = {
        open: false,
        scroll: 'paper',
    };

    handleClickOpen=scroll=>()=>{
        this.setState({open:true,scroll})
    }

    handleClose=()=>{
        this.setState({open:false})
    }


    render() { 
        const {buttonNames} = this.props

        return (
          <div>
            <Typography
              onClick={this.handleClickOpen("paper")}
              style={{ fontSize:12,textDecoration:"underline"}}
            >
              {buttonNames}
            </Typography>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              scroll={this.state.scroll}
              aria-labelledby="scroll-dialog-title"
            >
              <DialogTitle id="scroll-dialog-title">
                Course Details
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Cras mattis consectetur purus sit amet fermentum. Cras
                  justo odio, dapibus ac facilisis in, egestas eget
                  quam. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
                  Aenean lacinia bibendum nulla sed consectetur.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper
                  nulla non metus auctor fringilla. Cras mattis
                  consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor. Aenean lacinia
                  bibendum nulla sed consectetur. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus
                  auctor fringilla. Cras mattis consectetur purus sit
                  amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et.
                  Vivamus sagittis lacus vel augue laoreet rutrum
                  faucibus dolor auctor. Aenean lacinia bibendum nulla
                  sed consectetur. Praesent commodo cursus magna, vel

                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                {/* <Button onClick={this.handleClose} color="primary">
                  Subscribe
                </Button> */}
              </DialogActions>
            </Dialog>
          </div>
        );
    }
}
 
export default Dialogs;