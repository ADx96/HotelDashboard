import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class BookingStore {
  bookings = [];

  createBooking = async (newBooking) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/Bookings",
        newBooking
      );
      this.books.push(res.data);
    } catch (error) {
      console.log("log1 -> createCookie -> error", error);
    }
  };
  deleteBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:8000/Bookings/${bookingId}`);
      this.bookings = this.bookings.filter(
        (booking) => booking.id !== +bookingId
      );
    } catch (error) {
      console.log("Booking -> deleteCookie -> error", error);
    }
  };
  fetchBooking = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Bookings");
      this.bookings = response.data;
      console.log(this.bookings);
    } catch (error) {
      console.error("Booking -> fetchProducts -> error", error);
    }
  };

  updateBooking = async (updatedBooking) => {
    try {
      await axios.put(
        `http://localhost:8000/Bookings/${updatedBooking.id}`,
        updatedBooking
      );
      const booking = this.bookings.find(
        (booking) => booking.id === updatedBooking.id
      );
      for (const key in booking) booking[key] = updatedBooking[key];
    } catch (error) {
      console.log("Booking -> updateCookie -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      bookings: observable,
      deleteBooking: action,
      createBooking: action,
      updateBooking: action,
      fetchBooking: action,
    });
  }
}

const bookingsStore = new BookingStore();
bookingsStore.fetchBooking();

export default bookingsStore;
