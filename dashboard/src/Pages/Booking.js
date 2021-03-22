import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import "../Components/Datatable.css";
import bookingsStore from "../Mobx/BookngMobx";

function Booking(props) {


  const rows = [];   bookingsStore.hotels.forEach((booking) => {
    
    rows.push({ 
    
    id: booking.id, col1: booking.id, col2: booking.hotelname, col3: booking.customername, 
    col4: booking.price, col5: booking.Date, 
    col6: booking.customerpassportnumber,
    col7: booking.hotellocation,
    col8: booking.Roomnum}); });

  const columns = [
    { field: "col1", headerName: "first", width: 150 },
    { field: "col2", headerName: "second", width: 150 },
    { field: "col4", headerName: "third", width: 150 },
    { field: "col5", headerName: "fourth", width: 150 },
    { field: "col6", headerName: "fifth", width: 150 },
    { field: "col7", headerName: "sixth", width: 150 },
    { field: "col8", headerName: "sixth", width: 150 },



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
