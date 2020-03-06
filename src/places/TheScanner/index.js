import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { getX, getY } from "../../functions/scanner/coords.js"

import Box from '@material-ui/core/Box';
const boxWithMapProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: (window.innerWidth - 45), height: (window.innerWidth - 45) },
  borderColor: 'text.primary',
};

const oneGridProps = {
  bgcolor: 'background.paper',
  //m: 1,
  style: { width: (boxWithMapProps.style.width/10), height: (boxWithMapProps.style.height/10) },
  borderColor: 'text.primary',
};
export default function TheScanner_index() {
    return (
        <Box id="boxWithMap" border={1} height={100} width="100%" {...boxWithMapProps} >
            <Box border={1} {...oneGridProps}>
                
            </Box>
        </Box>
    );
}
