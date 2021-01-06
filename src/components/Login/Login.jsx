import "./Login.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import endpoints from "../../config";

const Login = () => {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let config = {
    headers: {
      header1: "Access-Control-Allow-Origin: *",
    },
  };

  /*  const [error, setError] = useState({name:"", password:""})*/

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Tu nombre de usuario es: " + user + " y la password es: " + password
    );
    axios
      .post(
        endpoints.URLBackendKong + "login",
        {
          userName: user,
          password: password,
        },
        config
      )
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChangeUsername = (e) => {
    const userName = e.target.value;
    setUsername(userName);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  return (
    <form className="formBox">
      <h2 className="loginTitle">Login</h2>
      <div className="inputDiv">
        <Form.Control
          type="text"
          name="username"
          placeholder="Usuario"
          value={user}
          onChange={onChangeUsername}
        />
      </div>
      <div className="inputDiv">
        <Form.Control
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className="buttonDiv">
        <Button
          variant="success"
          type="submit"
          onClick={handleSubmit}
          className="buttons"
        >
          Ingresar
        </Button>
        <Link to="/">
          <Button variant="success" type="submit" className="buttons">
            Volver
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default Login;
