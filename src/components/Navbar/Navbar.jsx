import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_options">
        <NavLink
          className="navbar_options-item"
          activeClassName="is-active"
          to="/login"
        >
          Pagina Principal
        </NavLink>

        <NavLink
          className="navbar_options-item"
          activeClassName="is-active"
          to="/about"
        >
          Catalogo
        </NavLink>

        <NavLink
          className="navbar_options-item"
          activeClassName="is-active"
          to="/about"
        >
          Contactanos
        </NavLink>
      </div>
      <div className="logo">
        <NavLink className="logo-item" activeClassName="is-active" to="/">
          Porto's
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
