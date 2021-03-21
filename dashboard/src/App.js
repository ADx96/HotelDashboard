import ResponsiveDrawer from "./Components/SideBar";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inbox from "./Pages/Inbox";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>

      <Router>
        <ResponsiveDrawer />
        <Switch>
          <Route path="/AddHotel" exact component={Inbox} />
          <Route path="/" component={Booking} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
