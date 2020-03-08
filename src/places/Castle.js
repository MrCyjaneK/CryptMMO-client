import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import GetIcon from "../functions/GetIcon.js"
import handleClick from '../functions/handleClick.js';
import post from '../functions/request.js';

import {getCached, storeCached} from '../functions/cache.js';

// Cache it...
//Because it is less likely that menu will be updated that quickly...
let request = {
    "urid": "UniqueRequestId",
    "method": "getCastleMenu",
    "params": null
}

let menuarray;
try {
    if (getCached(`places.Castle.manuarray`) === 0) {
        menuarray = post(request);
        menuarray = menuarray.response.menu;
        storeCached(`places.Castle.manuarray`,JSON.stringify(menuarray))
    } else {
        menuarray = JSON.parse(getCached(`places.Castle.manuarray`))
    }
} catch (e) {
    menuarray = [];
}
export default function Castle(props) {
    if (menuarray === []) {
        menuarray = post(request);
        menuarray = menuarray.response.menu;
    }
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
