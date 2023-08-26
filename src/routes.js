import Favorite from "./layouts/favorite";
import MainPage from "./layouts/mainPage";
import StudentPage from "./pages/studentPage";

export const routes = [
  {
    path: "",
    breadcrumb: "Главная",
    element: <MainPage />,
    display: true,
    title: "Главная",
    children: [{
      path: ":id",
      element: <StudentPage />,
      display: false,
      title: "Страница студента",
    }]
  },
  {
    path: "/favorite",
    element: <Favorite />,
    display: true,
    title: "Избранное",
  }
];