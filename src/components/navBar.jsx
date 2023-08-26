import React from "react";
import { routes } from "../routes";
import { NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const {pathname} = useLocation()

  return (
    <nav className=" flex justify-center items-center gap-6 py-2">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          className={({ isActive }) =>
            isActive
              ? " text-blue-600 cursor-default underline underline-offset-4 text-xl"
              : "text-blue-900 hover:text-blue-400 transition duration-300 text-xl"
          }
          to={route.path}
        >
          {route.title}
        </NavLink>
      ))}
      <p className="ml-5">
        <span className="text-blue-600 font-extrabold">Home </span>
        {pathname}
      </p>
    </nav>
  );
}

export default NavBar;
