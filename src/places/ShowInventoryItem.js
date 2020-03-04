import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import getString from '../functions/getString.js';
//import renderDialog from '../functions/renderDialog.js';

import Button from '@material-ui/core/Button';

//import post from '../functions/request.js';

export default function ShowInventoryItem(props) {
    let id = props

    let request = {
        "urid": "UniqueRequestId",
        "method": "getUserItem",
        "params": {
            "id": id
        }
    }
    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": {
            "item": {
                "id": id,
                "name": "Wooden Sword",
                "type": "Common",
                "attack": 0.1,
                "defense": 0,
                "weight": 0.5,
                "speed": 0,
                "quantity": 1,
                "equipped": Math.round(Math.random()),
                "description": "Wooden sword, it ain't much but it's free.",
                "icon": "/images/items/wooden_sword.png"
            },
            "message": "Item not found.",
            "error": Math.round(Math.random())
        },
        "error": null
    }
    let item = response.response.item;
    return (
        <div style={{"textAlign": "center", "width": "100%"}} id="shopItemTable">
            <Avatar variant="rounded" style={{"display": "inline-block", "width": "160px", "height": "160px" }}>
                <img src={item.icon} alt={"itemIcon:"+item.icon} />
            </Avatar>
            {
                /*
                    TODO: Put stuff in here in better order.. just make it look better
                */
            }
            <hr />
            <Typography variant="body1">
                {getString('POWER_ATTACK','Attack')}: {item.attack}
            </Typography>
            <hr />
            <Typography variant="body1">
                {getString('POWER_DEFENSE','Defense')}: {item.defense}
            </Typography>
            <hr />
            <Typography variant="body1">
                {getString('POWER_WEIGHT','Weight')}: {item.weight}
            </Typography>
            <hr />
            <Typography variant="body1">
                {getString('POWER_SPEED','Speed')}: {item.speed}
            </Typography>
            <hr />
            <Typography variant="body1">
                {getString('STRING_QUANTITY','Quantity')}: {item.quantity}
            </Typography>
            <hr />
            <Typography variant="body1">
                {getString('ITEM_DESC_'+item.id,item.description)}
            </Typography>
            <hr />
            <Button variant="contained" color="primary" onClick={(() => equipItem(item.id))}>
                Equip
            </Button>
            <Button variant="contained" color="primary" onClick={(() => sellItem(item.id))}>
                Sell
            </Button>
        </div>
    )
}

function equipItem(itemid) {
    console.log("#TODO");
}

function sellItem(itemid) {
    console.log("#TODO");
}
