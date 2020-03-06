import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import handleClick from '../functions/handleClick.js';


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
        {/*#TODO: Put some stats in here or whatever...*/}
        <Button variant="contained" color="primary" onClick={((e) => handleClick(e,"Inventory"))}>
            Inventory
        </Button>
        </div>
    )
}
