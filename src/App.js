import { useRoutes, Link } from "react-router-dom";
import withRouter from "./components/hoc/withRoutes";
import { routes } from "./routes";
import NavBar from "./components/navBar";
import Breadcrumbs from "./components/breadcrumbs";

function App() {
  const appRoutes = useRoutes(routes);
  return (
    <div className=" flex justify-center relative min-h-screen ">
      <div className="flex flex-col items-center w-full max-w-7xl py-4">
        <header className="  container ">
          <NavBar />
        </header>
        <main className="h-full  w-full container"><Breadcrumbs />{appRoutes}</main>
        <footer className="items-center relative  rounded-t-2xl container">
          <span className=" px-2 text-xl text-gray-500">&copy; <Link target="_blank" to={"https://result.school"} className=" hover:text-gray-800 transition duration-300">Result School</Link> Team 102</span>
        </footer>
      </div>
    </div>
  );
}

const AppWithRoutes = withRouter(App);
export default AppWithRoutes;
