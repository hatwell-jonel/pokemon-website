import React from "react";
import { NavLink } from "react-router-dom";
import "./active.css";

function Header() {
  return (
    <header>
      <h1 className="text-center">Routing</h1>

      <ul className="text-center">
        <NavLink
          to="/"
          className="mx-2 text-dark display-6 link"
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="mx-2 text-dark display-6 link"
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className="mx-2 text-dark display-6 link"
          activeClassName="active"
        >
          Services
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
