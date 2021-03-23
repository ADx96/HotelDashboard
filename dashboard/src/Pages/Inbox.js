import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import "../Components/SideBar";
import Hotelmodal from "../Components2/Create";
import roomsStore from "../Mobx/Roomsmobx";
import hotelsStore from "../Mobx/Hotelmobx";
import Roomsmodal from "../Components2/Createroom";
import Button from "@material-ui/core/Button";
import { observer } from "mobx-react";

function Inbox() {
  const rows = [];

  roomsStore.rooms.forEach((room) => {
    rows.push({
      id: room.id,
      col8: room.roomnum,
      col9: room.price,
      col10: room.rooms,
    });
  });

  hotelsStore.hotels.forEach((hotel) => {
    rows.push({
      id: hotel.id,
      col1: hotel.id,
      col2: hotel.hotelname,
      col3: hotel.rating,
      col4: hotel.hotellocation,
      col5: hotel.description,
      col6: hotel.price,
      col7: hotel.image,
    });
  });

  const columns = [
    { field: "col1", headerName: "Hotel id", width: 190 },
    { field: "col2", headerName: "Hotel name", width: 150 },
    { field: "col3", headerName: "rating", width: 150 },
    { field: "col4", headerName: "description", width: 180 },
    { field: "col5", headerName: "hotellocation", width: 150 },
    { field: "col6", headerName: "price", width: 150 },
    { field: "col7", headerName: "image", width: 150 },
    { field: "col8", headerName: "Room number", width: 190 },
    { field: "col9", headerName: "Room price", width: 170 },
    { field: "col10", headerName: "Rooms Availabe", width: 260 },
  ];
  return (
    <div>
      <div className="table-container" style={{ display: "flex" }}>
        <div className="table" style={{ height: 500, width: "60%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            data={hotelsStore.HotelList}
            checkboxSelection
            onRowSelected={(row) => console.log(row.data.id, row.isSelected)}
            localeText={{
              toolbarDensity: "Size",
              toolbarDensityLabel: "Size",
              toolbarDensityCompact: "Small",
              toolbarDensityStandard: "Medium",
              toolbarDensityComfortable: "Large",
            }}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>

        <Hotelmodal />
        <Roomsmodal />
      </div>{" "}
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => hotelsStore.deleteHotel()}
      >
        Delete
      </Button>
    </div>
  );
}

export default observer(Inbox);
