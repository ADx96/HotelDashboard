import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import "../Components/Datatable.css";
import bookingsStore from "../Mobx/BookingMobx";

function Booking() {
  const rows = [];
  bookingsStore.bookings.forEach((booking) => {
    rows.push({
      id: booking.id,
      col1: booking.id,
      col2: booking.hotelname,
      col3: booking.customername,
      col4: booking.mobile,
      col5: booking.price,
      col6: booking.Date,
      col7: booking.DateEnd,
      col8: booking.customerpassportnumber,
      col9: booking.hotellocation,
      col10: booking.RoomNum,
      col11: booking.movienight,
    });
  });

  const columns = [
    { field: "col1", headerName: "id", width: 190 },
    { field: "col2", headerName: "hotelname", width: 190 },
    { field: "col3", headerName: "customername", width: 190 },
    { field: "col4", headerName: "mobile", width: 190 },
    { field: "col5", headerName: "price", width: 190 },
    { field: "col6", headerName: "Date", width: 290 },
    { field: "col7", headerName: "DateEnd", width: 190 },
    { field: "col8", headerName: "Customer passport ", width: 190 },
    { field: "col9", headerName: "Location", width: 190 },
    { field: "col10", headerName: "Room Num", width: 190 },
    { field: "col11", headerName: "movienight", width: 190 },
  ];

  return (
    <div className="table" style={{ height: 500, width: "60%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
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
  );
}

export default Booking;
