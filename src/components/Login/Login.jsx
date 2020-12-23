import "./Login.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*  const [error, setError] = useState({name:"", password:""})*/

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Tu nombre de usuario es: " + user + " y la password es: " + password
    );
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
      <h2>Login</h2>
      <div className="inputDiv">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Usuario"
          value={user}
          onChange={onChangeUsername}
        />
      </div>
      <div className="inputDiv">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div>
        <Button
          variant="success"
          type="submit"
          onClick={handleSubmit}
          className="buttons"
        >
          Inrgesar
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
