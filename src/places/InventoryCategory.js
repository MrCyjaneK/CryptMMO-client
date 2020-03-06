import React from 'react';
import Button from '@material-ui/core/Button';
import handleClick from '../functions/handleClick.js';

export default function InventoryCategory(cat) {
    // TODO: Add caching...
    let request = {
        "urid": "UniqueRequestId",
        "method": "getInventory",
        "params": {
            "type": "showItems",
            "category": cat
        }
    }
    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": [
            {
                "id": 12,
                "name": "Somename"
            },
            {
                "id": 14,
                "name": "Somename 1"
            },
            {
                "id": 17,
                "name": "Somename 2"
            },
            {
                "id": 20,
                "name": "Somename 3"
            }
        ]
    }
    return (
        <div>
        {response.response.map(x => (
            <Button variant="contained" color="primary" onClick={((e) => handleClick(e,"render:ShowInventoryItem,"+x.id))}>
                {x.name}
            </Button>
        ))}
        </div>
    )
}
