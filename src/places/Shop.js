import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import handleClick from '../functions/handleClick.js';

let rows = [
    createData('Sword','desc1',1),
    createData('Helmet','desc2',2),
    createData('Breastplate','desc3',3),
    createData('Sword','desc1',1),
    createData('Helmet','desc2',2),
    createData('Breastplate','desc3',3),
    createData('Sword','desc1',1),
    createData('Helmet','desc2',2),
    createData('Breastplate','desc3',3),
    createData('Sword','desc1',1),
    createData('Helmet','desc2',2),
    createData('Breastplate','desc3',3)
]
export default function Shop(props) {
    return (
        <div id="shopTable">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {rows.map((row,i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {row.category}
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right" style={{"width": "30%"}}>
                                <Button variant="contained" color="primary" onClick={((e) => handleClick(e, 'render:shopCategory,'+row.opencategory))} >
                                    Open
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

function createData(category,description,opencategory) {
    return {category,description,opencategory};
}







