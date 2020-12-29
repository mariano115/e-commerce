import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./views/login/Login";
import HomePage from "./views/home/Home";
import ContactPage from "./views/contacto/Contacto";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Contacto" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
