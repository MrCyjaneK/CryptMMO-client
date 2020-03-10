import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));

export default function Profile(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    let user = user(props.userid)
    return (
        <div>
            <p>{JSON.stringify(props)}</p>
            <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
                <Grid key="profilePverview" item>
                    <Paper className={classes.paper} >
                        <Avatar alt="" >XD{/*This should be icon.. but #TODO*/}</Avatar>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}
