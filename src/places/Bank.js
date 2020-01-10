import React from 'react';
import Typography from '@material-ui/core/Typography';
import GetIcon from "../functions/GetIcon.js";
import user from "../functions/user.js";

export default function Bank(props) {
    return (
        <Typography variant="h5">
            <GetIcon name="AccountBalance" />
            Account Balance: {user().balance}
        </Typography>
    )
}