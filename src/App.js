/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleLand from "./pages/SingleLand";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

export default function App() {

  // const [lists, setLists] = useState([]);
  
  // handleClick = () = {
  //  
  //   fetch("http://127.0.0.1:6001/lists", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: "",
  //       user_id: "1",
  //       land_id: "",
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((console.log));
  //     // setLists(lists)
  // }

  const handleClick = (event, landId) => {
    
    // debugger;
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
      // console.log(response);
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