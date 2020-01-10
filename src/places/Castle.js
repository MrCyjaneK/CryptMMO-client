import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import GetIcon from "../functions/GetIcon.js"
import handleClick from '../functions/handleClick.js';
//TODO: Make api request to get all buttons in here.

let request = {
    "urid": "UniqueRequestId",
    "method": "getCastleMenu",
    "params": null
}

let response = {
    "request": request,
    "ok": true,
    "urid": request.urid,
    "response": {
        "menu": [
            [
                {
                    "text": "AliÐoge",
                    "icon": "LocalMall",
                    "key": "castleShop",
                    "action": "render:Shop",
                    "size": "50%"
                },
                {
                    "text": "ReÐolud",
                    "icon": "AccountBalance",
                    "key": "castleBank",
                    "action": "render:Bank",
                    "size": "50%"
                },
            ],
            [
                {
                    "text": "Battle",
                    "icon": "Adb",
                    "key": "castleBattle",
                    "action": "render:Battle",
                    "size": "50%"
                },
                {
                    "text": "Tavern",
                    "icon": "OutdoorGrill",
                    "key": "castleTavern",
                    "action": "render:Tavern",
                    "size": "50%"
                },
            ]
        ]
    },
    "error": null
}

let menuarray = response.response.menu;

export default function Castle(props) {
    return (
        <div>
            <Typography variant="h4">TODO: Put something here</Typography>
            <ButtonGroup key="castlegroupmainmenu" orientation="vertical" color="primary" aria-label="vertical outlined primary button group" style={{"width": "100%"}} >
                {menuarray.map((submenu, i) => (
                <ButtonGroup key={"castleBtn"+i}color="primary" aria-label="outlined primary button group" style={{"width": "100%"}}>
                    {submenu.map((item,j) => (
                        <Button key={item.key} style={{"width": item.size}} onClick={((e) => handleClick(e, item.action))}><GetIcon name={item.icon} />{item.text}</Button>
                    ))}
                </ButtonGroup>
                ))}
            </ButtonGroup>
        </div>
    )
}