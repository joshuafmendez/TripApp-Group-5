import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import CarIndex from "./Pages/CarIndex";
import CarNew from "./Pages/CarNew";
import CarShow from "./Pages/CarShow";
import "./App.css";
import axios from "axios";
import { apiURL } from "./util/apiURL";

const API = apiURL();

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cars">
            <CarsIndex />
          </Route>
          <Route path="/cars/new">
            <CarsNew />
          </Route>
          <Route exact path="/cars/:id">
            <CarsShow />
          </Route>
          <Route path="/cars/:id/edit">
            <CarsEdit />
          </Route>
          <Route exact path="/cars/:car_id/trips">
            <TripsIndex />
          </Route>
          <Route path="/cars/:car_id/trips/new">
            <TripsNew />
          </Route>
          <Route exact path="/cars/:car_id/trips/:id">
            <TripsShow />
          </Route>
          <Route path="/cars/:car_id/trips/:id/edit">
            <TripsEdit />
          </Route>
          <Route exact path="/cars/:car_id/expenses">
            <ExpensesIndex />
          </Route>
          <Route path="/cars/:car_id/expenses/new">
            <ExpenesNew />
          </Route>
          <Route exact path="/cars/:car_id/expenses/:id">
            <ExpensesShow />
          </Route>
          <Route path="/cars/:car_id/expenses/:id/edit">
            <ExpensesEdit />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
