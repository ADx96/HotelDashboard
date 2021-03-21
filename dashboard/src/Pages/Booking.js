import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import "../Components/Datatable.css";

function Booking() {
  const rows = [
    { id: 1, col1: "1", col2: "1" },
    { id: 2, col1: "2", col2: "2" },
    { id: 3, col1: "3", col2: "3" },
  ];

  const columns = [
    { field: "col1", headerName: "first", width: 150 },
    { field: "col2", headerName: "second", width: 150 },
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
