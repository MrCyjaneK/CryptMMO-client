import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import renderDialog from '../functions/renderDialog.js';

let request = {
    "urid": "UniqueRequestId",
    "method": "getQuests",
    "params": null
}

let response = {
    "request": request,
    "ok": true,
    "urid": request.urid,
    "response": {
        "quests": [
            {
              "id": 1,
              "name": 'Forest',
              "time": '2:00 minutes'
            },
            {
              "id": 2,
              "name": 'Cave',
              "time": '3:00 minutes'
            }

        ]
    },
    "error": null
}



const rows = response.response.quests;

export default function Quest() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Quest name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">start</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" onClick={(() => startQuest(row.id))} >
                  Start
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function startQuest(id) {
    let request = {
        "urid": "UniqueRequestId",
        "method": "startQuest",
        "params": {
            "id": id
        }
    }
    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": "Quest started!",
        "error": null
    }
    renderDialog(response.response,'Quest started',"snack");
}