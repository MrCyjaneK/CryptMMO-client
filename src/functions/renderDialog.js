import React from 'react';
import ReactDOM from 'react-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const divid = 'dialogarea'

export default function renderDialog(content, title = "Alert", type = 'alert', buttons = ['Ok']) {
    if (type === "snack") {
        ReactDOM.render(
            AlertDialog(content)
        , document.getElementById(divid));
        setTimeout(() => {
            handleClose()
        },5000)
    }
    if (type === "alert") {
        ReactDOM.render(
            BigAlert(content,title,buttons)
        , document.getElementById(divid));
    }
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function AlertDialog(content) {
    return (
        <Snackbar 
            open={true}
            anchorOrigin={{ "vertical": "bottom", "horizontal": "left" }}
            >
            <Alert color="success">
                {content}
            </Alert>
        </Snackbar>
    );
}

function handleClose() {
    ReactDOM.render(
        null
    , document.getElementById(divid));
}

function BigAlert(content,title,buttons) {
    return (
        <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}