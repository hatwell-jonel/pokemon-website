import React from "react";
import logo from "../../Images/pokemon-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <ul>
          <li>
            <Link className="links" to="/pokemon-website">
              Home
            </Link>
          </li>

          <li className="header-logo">
            <div className="circle">
              <img src={logo} className="img-fluid " alt="logo" />
            </div>
          </li>

          <li>
            <Link className="links" to="/pokedex">
              Pokedex
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;

//  https://pokeapi.co/api/v2/pokemon
