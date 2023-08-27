import React from "react";
import { useLocation, Link } from "react-router-dom";
import { routes } from "../routes";

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  return (
    <nav className=" flex ">
      <Link to="/">Главная</Link>
      {paths.map((path, index) => {
        const currentPath = `/${paths.slice(0, index + 1).join("/")}`;
        const matchingRoute = routes.find(
          (route) => route.path === currentPath
        );
        const breadcrumbTitle = matchingRoute ? matchingRoute.title : path;

        return (
          <Link to={currentPath} key={path}>
            /{breadcrumbTitle}
          </Link>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
