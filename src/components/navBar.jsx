import React from "react";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" flex justify-center items-center gap-6">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          className={({ isActive }) => (isActive ? " text-green-600" : "")}
        >
          {route.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
