import MainPage from "./components/layouts/mainPage";

export const routes = [
  {
    path: "",
    breadcrumb: "Главная",
    element: <MainPage />,
    display: true,
    title: "Главная",
    children: [{
      path: ":id",
      element: <MainPage />,
      display: false,
      title: "Страница студента",
    }]
  },
  {
    path: "/favorite",
    element: <MainPage />,
    display: true,
    title: "Избранное",
  }
];