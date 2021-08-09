import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleLand from "./pages/SingleLand";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

export default function App() {
  const handleClick = (event, landId) => {
    fetch("http://127.0.0.1:6001/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: "",
        user_id: 3,
        land_id: landId
      }),
    })
    .then((response) => response.json())
    .then((response) => {
    })
    .catch((error) => console.log(error));
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/land/:id">
          <SingleLand handleClick={handleClick} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}