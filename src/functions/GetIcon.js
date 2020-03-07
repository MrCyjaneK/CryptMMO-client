import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import TelegramIcon from '@material-ui/icons/Telegram';
import FaceIcon from '@material-ui/icons/Face';
import PublicIcon from '@material-ui/icons/Public';

import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AdbIcon from '@material-ui/icons/Adb';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';






import ErrorIcon from '@material-ui/icons/Error';

export default function GetIcon(props) {
    switch (props.name) {
        case 'Home':
            return (
                <HomeIcon/>
            );
        case 'Map':
            return (
                <MapIcon/>
            );
        case 'Telegram':
            return (
                <TelegramIcon/>
            );
        case 'Face':
            return (
                <FaceIcon/>
            );
        case 'Public':
            return (
                <PublicIcon/>
            );
        case 'LocalMall':
            return (
                <LocalMallIcon/>
            );
        case 'AccountBalance':
            return (
                <AccountBalanceIcon/>
            );
        case 'Adb':
            return (
                <AdbIcon/>
            );
        case 'OutdoorGrill':
            return (
                <OutdoorGrillIcon/>
            );
        case 'Walk':
            return (
                <DirectionsWalkIcon />
            );
        default:
            return (
                <ErrorIcon />
            )
    }
}
