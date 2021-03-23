import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class RoomStore {
  rooms = [];

  createRoom = async (newRoom, hotelId) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/Hotels/${hotelId}/Rooms`,
        newRoom
      );
      this.rooms.push(res.data);
    } catch (error) {
      console.log("log1 -> createRooms -> error", error);
    }
  };
  deleteRoom = async (roomId) => {
    try {
      await axios.delete(`http://localhost:8000/Rooms/${roomId}`);
      this.roooms = this.rooms.filter((room) => room.id !== +roomId);
    } catch (error) {
      console.log("rooms -> deleteRooms -> error", error);
    }
  };
  fetchRoom = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Rooms");
      this.rooms = response.data;
      console.log(this.rooms);
    } catch (error) {
      console.error("rooms -> fetchRooms -> error", error);
    }
  };

  updateRoom = async (updatedRoom) => {
    try {
      await axios.put(
        `http://localhost:8000/Rooms/${updatedRoom.id}`,
        updatedRoom
      );
      const room = this.rooms.find((room) => room.id === updatedRoom.id);
      for (const key in room) room[key] = updatedRoom[key];
    } catch (error) {
      console.log("Rooms -> updateCookie -> error", error);
    }
  };

  constructor() {
    makeObservable(this, {
      rooms: observable,
      deleteRoom: action,
      createRoom: action,
      updateRoom: action,
      fetchRoom: action,
    });
  }
}

const roomsStore = new RoomStore();
roomsStore.fetchRoom();

export default roomsStore;
