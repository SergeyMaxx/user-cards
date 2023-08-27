import React from "react";
import { useParams, Outlet } from "react-router-dom";
import User from "../components/user";
import { useStudents } from "../hooks/useStudents";
import Breadcrumbs from "../components/breadcrumbs";

function MainPage() {
  const { id } = useParams();
  const { students } = useStudents();

  return id ? (
    <Outlet />
  ) : (
    <>
      <Breadcrumbs endCrumb={"test"} />
      <section className="flex flex-col justify-between gap-2 items-center mb-6">
        <h1 className=" uppercase text-3xl text-gray-900 ">Наша команда</h1>
        <div className="w-1/3 h-1 bg-black bg-gradient-to-r from-cyan-500 to-blue-500 mb-10" />
        {students && (
          <ul className="flex flex-wrap gap-10 justify-center">
            {students.map((u) => (
              <User key={u.id} userData={u} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default MainPage;
