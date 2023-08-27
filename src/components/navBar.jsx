import React, { useState } from "react";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";
import './navBar.css'

function NavBar() {
  const { favorite } = useStudents()
  const [darkmode, setDarkmode] = useState(false)
  
  const toggleDarkmode = () => {
    document.body.classList.toggle('dark')
    setDarkmode(prev => !prev)
  }

  return (
    <nav className="relative flex flex-col sm:flex-row justify-center items-center gap-6 px-2 pb-4 border-b">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          className={({ isActive }) =>
            isActive
              ? "dark:text-slate-100 relative text-blue-600 cursor-default underline underline-offset-4 text-2xl"
              : "dark:text-slate-400 relative text-blue-900 hover:text-blue-400 dark:hover:text-slate-200 transition duration-300 text-2xl"
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
      <button onClick={toggleDarkmode} className={"darkmode-btn absolute top-[12%] right-[10px] w-[60px] h-[20px] bg-[#fff] border border-stone-400 rounded-xl" + (darkmode ? ' active' : '')}></button>
    </nav>
  );
}

export default NavBar;
