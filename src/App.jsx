import { useRoutes } from "react-router-dom";
import withRouter from "./components/hoc/withRoutes";
import { routes } from "./routes";
import NavBar from "./components/navBar";

function App() {
  const appRoutes = useRoutes(routes);
  return (
    <div className=" flex justify-center relative min-h-screen ">
      <div className="flex flex-col items-center w-full max-w-7xl">
        <header className="bg-[#f7f8fa] dark:bg-[#222222] rounded-b-2xl container ">
          <NavBar />
        </header>
        <main className="h-full  w-full container">{appRoutes}</main>
        <footer className="items-center relative bg-[#f7f8fa] dark:bg-[#222222] rounded-t-2xl container">
          footer
        </footer>
      </div>
    </div>
  );
}

const AppWithRoutes = withRouter(App);
export default AppWithRoutes;
