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
      col4: booking.price,
      col5: booking.Date,
      col6: booking.customerpassportnumber,
      col7: booking.hotellocation,
      col8: booking.Roomnum,
    });
  });

  const columns = [
    { field: "col1", headerName: "id", width: 170 },
    { field: "col2", headerName: "hotelname", width: 170 },
    { field: "col4", headerName: "customername", width: 170 },
    { field: "col5", headerName: "Date", width: 170 },
    { field: "col6", headerName: "customerpassportnumber", width: 170 },
    { field: "col7", headerName: "Roomnum", width: 170 },
    { field: "col8", headerName: "sixth", width: 170 },
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
