import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
function Nav() {
  const navstyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <NavLink
          style={navstyle}
          to="/Forcedirectedgraph"
          className="main-nav"
          activeClassName="main-nav-active"
        >
          <li className="main-nav-active2">Force directed graph</li>
        </NavLink>
        <NavLink
          style={navstyle}
          to="/Bubble"
          className="main-nav"
          activeClassName="main-nav-active"
        >
          <li>Bubble chart</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
