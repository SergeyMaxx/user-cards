import React from "react";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" flex flex-col sm:flex-row justify-center items-center gap-6 py-2  border-b">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          className={({ isActive }) =>
            isActive
              ? " text-blue-600 cursor-default underline underline-offset-4 text-2xl"
              : "text-blue-900 hover:text-blue-400 transition duration-300 text-2xl"
          }
          to={route.path}
        >
          {route.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
