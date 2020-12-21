import "./Login.css";
import React, { useState } from "react";

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
        <input
          type="text"
          name="username"
          placeholder="UserName"
          className="inputPlace"
          value={user}
          onChange={onChangeUsername}
        />
      </div>
      <div className="inputDiv">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="inputPlace"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Login;
