import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import "../Components/SideBar";
import Hotelmodal from "../Components2/Create";
function Inbox(props) {
  const rows = [{ id: "", col1: "1", col2: "1" }];

  const columns = [
    { field: "col1", headerName: "id", width: 150 },
    { field: "col2", headerName: "hotelname", width: 150 },
    { field: "col3", headerName: "description", width: 150 },
  ];

  return (
    <div>
      <div className="table" style={{ height: 500, width: "60%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          data={props.HotelList}
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

      <Hotelmodal />
    </div>
  );
}

export default Inbox;
