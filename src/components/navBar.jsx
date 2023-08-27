import React from "react";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";

function NavBar() {
  const { favorite } = useStudents()

  return (
    <nav className=" flex flex-col sm:flex-row justify-center items-center gap-6 pt-2 pb-4  border-b">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          className={({ isActive }) =>
            isActive
              ? "relative text-blue-600 cursor-default underline underline-offset-4 text-2xl"
              : "relative text-blue-900 hover:text-blue-400 transition duration-300 text-2xl"
          }
          to={route.path}
        >
          {route.title}
          {route.title === "Избранное" && favorite && favorite.length !== 0 && (
            <div className="absolute flex justify-center items-center top-[-6px] right-[-17px] text-[16px] text-[white] leading-none w-[20px] h-[20px] bg-[red] rounded-full">
              <div>{favorite.length}</div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
