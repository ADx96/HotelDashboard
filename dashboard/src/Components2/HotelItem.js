import React from "react";
import ProductWrapper from "../styles";
import DeleteButton from "../Buttons/DeleteButton";
const HotelItem = ({ hotel }) => {
  return (
    <ProductWrapper>
      <p>{hotel.name}</p>
      <p>{hotel.description}</p>
      <p className="product-price">{hotel.price} KD</p>
      <DeleteButton hotelId={hotel.id} />
    </ProductWrapper>
  );
};

export default HotelItem;
