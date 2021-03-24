import ResponsiveDrawer from "./Components/SideBar";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddHotel from "./Pages/AddHotel";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveDrawer />
        <Switch>
          <Route path="/AddHotel" exact component={AddHotel} />
          <Route path="/" exact component={Booking} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
