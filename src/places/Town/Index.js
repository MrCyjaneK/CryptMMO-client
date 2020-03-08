import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import GetIcon from "../../functions/GetIcon.js"
import handleClick from '../../functions/handleClick.js';

const menuarray = [
    [
        {
            "text": "Citizens Market",
            "icon": "LocalMall",
            "key": "townCitizenMarket",
            "action": "render:TownCitizenMarket",
            "size": "100%"
        }
    ],
    [
        {
            "text": "Game Centre",
            "icon": "Casino",
            "key": "townGameCentre",
            "action": "render:TownGameCentre",
            "size": "100%"
        }
    ],
    [
        {
            "text": "Robin The Hoodie",
            "icon": "MonetizationOn",
            "key": "townRobin",
            "action": "render:TownRobin",
            "size": "100%"
        }
    ],
    [
        {
            "text": "Dark Cobweb",
            "icon": "DomainDisabled",
            "key": "townDarkCobweb",
            "action": "render:TownDarkCobweb",
            "size": "100%"
        }
    ]
]

export default function TownIndex() {
    return (
        <div>
        <Typography variant="h2">Cryptopia</Typography>
        <Typography variant="h6">You wander into the town of Cryptopia and you hear the chatter amongst the villagers echo through your ears</Typography>
        <ButtonGroup key="townselectmenu" orientation="vertical" color="primary" aria-label="vertical outlined primary button group" style={{"width": "100%"}} >
            {menuarray.map((submenu, i) => (
            <ButtonGroup key={"townBtn"+i}color="primary" aria-label="outlined primary button group" style={{"width": "100%"}}>
                {submenu.map((item,j) => (
                    <Button key={item.key} style={{"width": item.size}} onClick={((e) => handleClick(e, item.action))}><GetIcon name={item.icon} />{item.text}</Button>
                ))}
            </ButtonGroup>
            ))}
        </ButtonGroup>
        </div>
    )
}
