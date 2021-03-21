import React from "react";
import HotelItem from "../Components2/HotelItem";
import SearchBar from "./Searchbar";
import ProductWrapper from "../styles";
import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import hotelsStore from "../Mobx/Hotelmobx";
import { observer } from "mobx-react";

const Hotel = () => {
  const [query, setQuery] = useState("");

  const hotelList = hotelsStore.hotels
    .filter((hotel) => hotel.name.toLowerCase().includes(query.toLowerCase()))
    .map((hotel) => <ProductsItem product={hotel} key={hotel.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper>{hotelList}</ProductWrapper>
      <AddButton />
    </div>
  );
};
export default observer(Hotel);