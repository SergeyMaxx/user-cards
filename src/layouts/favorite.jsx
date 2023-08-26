import React from "react";
import { useStudents } from "../hooks/useStudents";
import User from "../components/user";

const Favorite = () => {
  const { students, favorite } = useStudents();

  return (
    <>
      <section className="flex flex-col justify-between gap-2 items-center my-20">
        <h1 className=" uppercase text-3xl text-gray-900 ">Избранное</h1>
        <div className=" w-1/3 h-1 bg-black bg-gradient-to-r from-cyan-500 to-blue-500 mb-10" />

        {localStorage.getItem("favorite") ? (
          <div className="">
            {students.length !== 0 &&
              favorite &&
              favorite.map((favId) => (
                <ul
                  key={students[favId - 1].id}
                  className="flex flex-wrap gap-10 justify-center"
                >
                  <User userData={students[favId - 1]} />
                </ul>
              ))}
          </div>
        ) : (
          <h1 className="mt-[20px]">Избранных нету</h1>
        )}
      </section>
    </>
  );
};

export default Favorite;
