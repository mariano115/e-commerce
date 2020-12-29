import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { Link } from "react-router-dom";

const Navbar = () => {
  //const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_options">
        <NavLink
          className="navbar_options-item"
          activeClassName="is-active"
          to="/login"
        >
          Nosotros
        </NavLink>

        <NavLink
          className="navbar_options-item"
          activeClassName="is-active"
          to="/about"
        >
          Productos
        </NavLink>

        <NavLink
          className="navbar_options-item"
          activeClassName="is-active"
          to="/contacto"
        >
          Contacto
        </NavLink>
      </div>
      <div className="logo">
        <NavLink className="logo-item" activeClassName="is-active" to="/">
          Porthos
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
