import React from "react";
import { useState } from "react";
import hotelsStore from "../Mobx/Hotelmobx";
import "./Create.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Hotelmodal = () => {
  const classes = useStyles();
  const [hotel, setHotel] = useState({
    hotelname: "",
    price: 0,
    rating: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setHotel({ ...hotel, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    hotelsStore.createHotel(hotel);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="form-group row">
        <div className="col-6">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            required
            type="text"
            className="form-control"
            name="hotelname"
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <TextField
            id="standard-basic"
            label="Standard"
            type="number"
            min="1"
            className="form-control"
            name="price"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <TextField
          id="standard-basic"
          label="Standard"
          required
          type="text"
          className="form-control"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <TextField
          id="standard-basic"
          label="Standard"
          required
          type="file"
          className="form-control"
          name="image"
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" disableElevation>
          Create
        </Button>
      </div>
    </form>
  );
};

export default Hotelmodal;
