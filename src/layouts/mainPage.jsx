import React from "react";
import { useParams, Outlet } from "react-router-dom";

function MainPage() {
  const { id } = useParams();
  return id ? (
    <Outlet />
  ) : (
    <section className="flex flex-col justify-between gap-2 items-center my-20">
      <h1 className=" uppercase text-3xl text-red-900 ">Наша команда</h1>
      <div className=" w-1/3 h-1 bg-black bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </section>
  );
}

export default MainPage;
