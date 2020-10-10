import React from "react";

import { Redirect, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";
import Homee from "./Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homee} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
