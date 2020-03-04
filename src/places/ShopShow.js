import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import getString from '../functions/getString.js';
import renderDialog from '../functions/renderDialog.js';

import Button from '@material-ui/core/Button';

import post from '../functions/request.js';
import handleClick from '../functions/handleClick.js';

export default function ShopShow(props) {
    let id = props;
    //Example request:
    let request = {
        "urid": "UniqueRequestId",
        "method": "getShopItem",
        "params": {
            "id": id
        }
    }
    /*let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": {
            "item": {
                "id": 1,
                "name": "Wooden Sword",
                "type": "Common",
                "attack": 0.1,
                "defense": 0,
                "weight": 0.5,
                "speed": 0,
                "price": 0,
                "description": "Wooden sword, it ain't much but it's free.",
                "icon": "/images/items/wooden_sword.png"
            }
        },
        "error": null
    }*/
    let response = post(request);
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
                {getString('POWER_SPEED','Speed')}: {item.price}
            </Typography>
            <hr />
            <Typography variant="body1">
                {getString('POWER_PRICE','Price')}: {item.price}
            </Typography>
            <hr />
            <Typography variant="body1">
                {getString('ITEM_DESC_'+item.id,item.description)}
            </Typography>
            <hr />
            <Button variant="contained" color="primary" onClick={(() => buyItem(item.id))}>
                Buy
            </Button>
        </div>
    )
}

function buyItem (itemid) {
    let request = {
        "urid": "UniqueRequestId",
        "method": "buyShopItem",
        "params": {
            "id": itemid
        }
    }

    // Example response:
    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": {
            "ok": Math.round(Math.random()), // Randomize success and fail messages
            "error": "Unable to purchase >item< you need to have >69< crypt (or you can't have more than >1< >item<)",
            "message": "Purchased >item< for >69< crypt!"
        },
        "error": null
    }
    if (response.response.ok) {
        renderDialog(response.response.message,"Purchased item!","snack")
        handleClick("e", "render:showInventoryItem|1")
    } else {
        renderDialog(response.response.error,"Failed","snack")
    }
}
