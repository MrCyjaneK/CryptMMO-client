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
import post from '../functions/request.js';

export default function ShopCategory(props) {
    let id = props;
    //Example request:
    let request = {
        "urid": "UniqueRequestId",
        "method": "getItemsInShop",
        "params": {
            "category": id
        }
    }

    let response = post(request);

    return (
        <div id="shopTable">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Attack</TableCell>
                            <TableCell align="right">Defense</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {response.response.items.map((row,i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {row.name.substr(0,32)}
                            </TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.attack}</TableCell>
                            <TableCell align="right">{row.defense}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" color="primary" onClick={((e) => handleClick(e, 'render:shopShow,'+row.id))} >
                                    Show
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
