import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class HotelStore {
  hotels = [];
  createHotel = async (newHotel) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/Hotels/create",
        newHotel
      );
      this.hotels.push(res.data);
    } catch (error) {
      console.log("log1 -> createCookie -> error", error);
    }
  };
  deleteHotel = async (hotelId) => {
    try {
      await axios.delete(`http://localhost:8000/Hotels/${hotelId}`);
      this.hotels = this.hotels.filter((hotel) => hotel.id !== +hotelId);
    } catch (error) {
      console.log("Hotels -> deleteCookie -> error", error);
    }
  };
  fetchHotel = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Hotels");
      this.hotels = response.data;
      console.log(this.hotels);
    } catch (error) {
      console.error("Hotels -> fetchProducts -> error", error);
    }
  };

  updateHotel = async (updatedHotel) => {
    try {
      await axios.put(
        `http://localhost:8000/Hotels/${updatedHotel.id}`,
        updatedHotel
      );
      const hotel = this.hotels.find((hotel) => hotel.id === updatedHotel.id);
      for (const key in hotel) hotel[key] = updatedHotel[key];
    } catch (error) {
      console.log("Hotels -> updateCookie -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      hotels: observable,
      deleteHotel: action,
      createHotel: action,
      updateHotel: action,
      fetchHotel: action,
    });
  }
}

const hotelsStore = new HotelStore();
hotelsStore.fetchHotel();

export default hotelsStore;
