import React from 'react';
import Button from '@material-ui/core/Button';
import handleClick from '../functions/handleClick.js';

// TODO: Add caching...
let request = {
    "urid": "UniqueRequestId",
    "method": "getInventory",
    "params": {
        "type": "showCategories"
    }
}
let response = {
    "request": request,
    "ok": true,
    "urid": request.urid,
    "response": [
        "Some Category 1|1",
        "Some Category 2|2",
        "Some Category 5|5",
    ]
}

export default function Inventory() {
    return (
        <div>
        {response.response.map(x => (
            <Button variant="contained" color="primary" onClick={((e) => handleClick(e,"render:InventoryCategory,"+x.split('|')[1]))}>
                {x.split('|')[0]}
            </Button>
        ))}
        </div>
    )
}
