import React from "react";
import { useParams } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";
import { transformAge } from "../utils/transformAge";

export default function StudentPage() {
  const { id } = useParams();
  const { getStudentById } = useStudents();
  const student = getStudentById(id);
  console.log(student);
  return (
    student && (
      <div>
        StudentPage
        <div className=" flex justify-between gap-6">
          <div className=" w-5/12">
            <div className=" flex flex-col justify-between items-center gap-6">
              <div className="">
                <img
                  src={student.img}
                  alt="Моя фотография"
                  className=" aspect-square object-cover"
                />
              </div>
              <div className=" flex flex-col gap-6">
                <span>
                  {student.firstName} {student.lastName}
                </span>
                <span>
                  {"Возраст: "}
                  {transformAge(student.age)}
                </span>
              </div>
              <div className="">
                <h2>Социальные сети</h2>
              </div>
            </div>
          </div>
          <div className=" w-7/12"></div>
        </div>
      </div>
    )
  );
}
