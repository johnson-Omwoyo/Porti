import React from "react";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="name_nav" to={"/"}>
        Johnson Omwoyo
      </NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to={"/"}>
          Home <span className="visually-hidden">(current)</span>
        </NavLink>
        <NavLink className="nav-item nav-link" to={"/about"}>
          About
        </NavLink>
        
        <NavLink className="nav-item nav-link" to={"/contact"}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
