import React from "react";
import { useStudents } from "../hooks/useStudents";
import User from "../components/user";

const Favorite = () => {
  const { students, favorite } = useStudents();

  return (
    <>
      <section className="flex flex-col justify-between gap-2 items-center mb-6">
        <h1 className="dark:text-slate-100 uppercase text-3xl text-gray-900 ">Избранное</h1>
        <div className=" w-1/3 h-1 bg-black bg-gradient-to-r from-cyan-500 to-blue-500 mb-10" />

        {localStorage.getItem("favorite") ? (
          <ul className="flex flex-wrap gap-10 justify-center">
            {students.length !== 0 &&
              favorite &&
              favorite.map((favId) => (
                <User
                  key={students[favId - 1].id}
                  userData={students[favId - 1]}
                />
              ))}
          </ul>
        ) : (
          <h1 className="dark:text-slate-100 mt-[20px]">В избранном пусто</h1>
        )}
      </section>
    </>
  );
};

export default Favorite;
