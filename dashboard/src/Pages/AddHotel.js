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
import AddRooms from "../Pages/AddRoom";
import Hotelmodal from "../Components2/Create";
import Roomsmodal from "../Components2/Createroom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
});

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

function AddHotel() {
  const classes = useStyles();

  return (
    <div className="table-container" style={{ display: "flex" }}>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell>Hotel id</TableCell>
              <TableCell align="right">Hotel name</TableCell>
              <TableCell align="right">rating</TableCell>
              <TableCell align="right">description</TableCell>
              <TableCell align="right">hotellocation</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">image</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hotelsStore.hotels.map((hotel) => (
              <ExpandableTableRow
                key={hotel.id}
                expandComponent={<AddRooms hotelId={hotel.id} />}
              >
                <TableCell component="th" scope="row">
                  {hotel.id}
                </TableCell>
                <TableCell align="right">{hotel.hotelname}</TableCell>
                <TableCell align="right">{hotel.rating}</TableCell>
                <TableCell align="right">{hotel.hotellocation}</TableCell>
                <TableCell align="right">{hotel.description}</TableCell>
                <TableCell align="right">{hotel.price}</TableCell>
                <TableCell align="right">{hotel.image}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => hotelsStore.deleteHotel(hotel.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </ExpandableTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Hotelmodal />
      <Roomsmodal />
    </div>
  );
}
export default observer(AddHotel);
