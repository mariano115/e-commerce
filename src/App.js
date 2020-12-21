import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./views/login/Login";
import HomePage from "./views/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
