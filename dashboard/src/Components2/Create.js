import React from "react";
import { useState } from "react";
import hotelsStore from "../Mobx/Hotelmobx";
import "./Create.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

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

const Hotelmodal = () => {
  const classes = useStyles();
  const [hotel, setHotel] = useState({
    hotelname: "",
    price: 0,
    rating: "",
    location: "",
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
      style={{ marginLeft: "50px" }}
    >
      <div className="form-group row">
        <h2>Create a hotel</h2>
        <TextField
          id="outlined-basic"
          label="name"
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
          label="description"
          variant="outlined"
          required
          type="text"
          className="form-control"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div className="col-6">
        <TextField
          id="outlined-basic"
          label="location"
          required
          variant="outlined"
          type="text"
          className="form-control"
          name="location"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="App">
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="image"
              type="file"
              onChange={handleChange}
            />
            <Fab
              color="secondary"
              size="small"
              component="span"
              aria-label="add"
              variant="extended"
            >
              <AddIcon /> Upload photo
            </Fab>
          </label>
        </div>
      </div>

      <Button variant="contained" color="primary" disableElevation>
        Create
      </Button>
    </form>
  );
};

export default Hotelmodal;
