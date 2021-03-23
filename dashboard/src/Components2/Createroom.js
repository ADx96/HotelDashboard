import React from "react";
import { useState } from "react";
import "./Create.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import roomsStore from "../Mobx/Roomsmobx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Roomsmodal = () => {
  const classes = useStyles();
  const [hotel, setHotel] = useState({
    roomnum: 0,
    price: 0,
    rooms: 0,
  });

  const handleChange = (event) => {
    setHotel({ ...hotel, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    roomsStore.createHotel(hotel);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{ marginLeft: "50px" }}
    >
      <div className="col-6">
        <h2>Add a room</h2>
        <TextField
          id="outlined-basic"
          label="price"
          required
          variant="outlined"
          type="text"
          min="1"
          className="form-control"
          name="price"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <TextField
          id="outlined-basic"
          label="Room number"
          required
          variant="outlined"
          type="text"
          min="1"
          className="form-control"
          name="roomnum"
          onChange={handleChange}
        />
      </div>
      <div className="col-6">
        <TextField
          id="outlined-basic"
          label="Rooms Availabe"
          required
          variant="outlined"
          type="text"
          min="1"
          className="form-control"
          name="rooms"
          onChange={handleChange}
        />
      </div>

      <Button variant="contained" color="primary" disableElevation>
        Add
      </Button>
    </form>
  );
};

export default Roomsmodal;
