import React from 'react';
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import getUser from "./user.js";

//TODO: Open popup menu when user clicks on attack, defense or dexterity and show stats like what items give that much power.


const RedProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#f44336', 0.75),
    },
    bar: {
      borderRadius: 20,
        backgroundColor: '#f44336',
    },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: theme.spacing(16),
        width: theme.spacing(16),
    },
    control: {
        padding: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(16)
    }
}));

export default function Profile(props) {
    const classes = useStyles();
    let user = getUser(props.userid)
    return (
        <div>
            <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                <Grid key="profilePreview" item>
                    <Paper className={classes.paper} >
                        <Avatar className={classes.avatar} alt="" src="/images/profilepics/ninja.png">XD{/*This should be icon.. but #TODO*/}</Avatar>
                    </Paper>
                    {/*This one is for HP*/}
                    <RedProgress variant="determinate" value={user.hp} ></RedProgress>
                </Grid>
                <List component="nav" className={classes.userstats}>
                    <ListItem button>
                        <ListItemText primary={"Attack: "+user.attack} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary={"Defense: "+user.defense} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary={"Dexterity: "+user.dexterity} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
        </div>
    )
}
