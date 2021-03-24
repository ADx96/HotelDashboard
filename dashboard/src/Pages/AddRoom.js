import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { observer } from "mobx-react";
import hotelsStore from "../Mobx/Hotelmobx";
import Button from "@material-ui/core/Button";
import roomsStore from "../Mobx/Roomsmobx";
const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, detail) {
  return { name, calories, fat, carbs, protein, detail };
}

function AddRooms({ hotelId }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Room id</TableCell>
            <TableCell align="right">Room Number</TableCell>
            <TableCell align="right">Room Price</TableCell>
            <TableCell align="right">Availabe roomsStore</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roomsStore.rooms
            .filter((room) => hotelId === room.hotelId)
            .map((room) => (
              <TableRow key={room.id}>
                <TableCell component="th" scope="row">
                  {room.id}
                </TableCell>
                <TableCell align="right">{room.id}</TableCell>
                <TableCell align="right">{room.roomnum}</TableCell>
                <TableCell align="right">{room.price}</TableCell>
                <TableCell align="right">{room.rooms}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => roomsStore.deleteRoom(room.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default observer(AddRooms);
