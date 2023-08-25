import React from "react";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      {routes.map((route) => (
        <NavLink key={route.path}>{route.title}</NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
