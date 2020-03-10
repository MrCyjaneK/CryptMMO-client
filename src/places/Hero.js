import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import handleClick from '../functions/handleClick.js';
import Profile from "../functions/Profile.js";
import user from '../functions/user.js';

const useStyles = makeStyles(theme => ({
    hero: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Hero() {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
        {/*TODO: Put some stats in here or whatever...*/}
        {/*TODO: Maybe some avatar icon with bio and stuff? It has to be done as a <Component /> So we can put it for example at the end of battle*/}
        <Profile userid={user().ID} />

        <Button style={{"width": "98%"}} variant="contained" color="primary" onClick={((e) => handleClick(e,"render:Inventory"))}>
            Inventory
        </Button>
        </div>
    )
}
