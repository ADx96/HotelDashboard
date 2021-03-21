import React from "react";
import { useState } from "react";
import { CreateButtonStyled } from "../Components2/Styles";
import hotelsStore from "../Mobx/Hotelmobx";

const Hotelmodal = () => {
  const [hotel, setHotel] = useState({
    name: "",
    price: 0,
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
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <div className="col-6">
          <label>Name</label>
          <input
            required
            type="text"
            className="form-control"
            name="hotelname"
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <label>Price</label>
          <input type="number" min="1" className="form-control" name="price" />
        </div>
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          required
          type="text"
          className="form-control"
          name="description"
        />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input required type="file" className="form-control" name="image" />
      </div>
      <CreateButtonStyled className="btn float-right" onClick={handleSubmit}>
        Create
      </CreateButtonStyled>
    </form>
  );
};

export default Hotelmodal;
