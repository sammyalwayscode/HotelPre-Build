import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./Components/Booking/Booking";
import HotelPage from "./Components/HotelsPage/HotelPage";
import SignAdmin from "./Components/SignAdmin/SignAdmin";
import HotelRoute from "./Components/HotelRoute/HotelRoute";
import RoomDiscript from "./Components/RoomDiscript/RoomDiscript";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/booking" exact component={Booking} />
        <Route path="/hotels" exact component={HotelPage} />
        <Route path="/register" exact component={SignAdmin} />
        <Route path="/hoteldetails/:id" exact component={HotelRoute} />
        <Route path="/roomdetails/:id" exact component={RoomDiscript} />
      </Switch>
    </Router>
  );
}

export default App;
