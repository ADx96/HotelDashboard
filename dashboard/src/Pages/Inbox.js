import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import "../Components/SideBar";
import Hotelmodal from "../Components2/Create";
import hotelsStore from '../Mobx/Hotelmobx';


function Inbox(props) {

  const rows = [];   hotelsStore.hotels.forEach((hotel) => {
    
    rows.push({ 
    
    id: hotel.id, col1: hotel.id, col2: hotel.hotelname, col3: hotel.rating, 
    col4: hotel.slug, col5: hotel.description, 
    col6: hotel.price,
    col7: hotel.image,
    }); });

    const columns = [
      { field: "col1", headerName: "first", width: 150 },
      { field: "col2", headerName: "second", width: 150 },
      { field: "col4", headerName: "third", width: 150 },
      { field: "col5", headerName: "fourth", width: 150 },
      { field: "col6", headerName: "fifth", width: 150 },
      { field: "col7", headerName: "sixth", width: 150 }
  
  
  
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
