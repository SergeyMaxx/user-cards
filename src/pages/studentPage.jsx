import React from "react";
import { useParams } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";
import { transformAge } from "../utils/transformAge";
import ProgressBar from "../components/progressBar";

export default function StudentPage() {
  const { id } = useParams();
  const { getStudentById } = useStudents();
  const student = getStudentById(id);
  return (
    student && (
      <section>
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
                <div className="">badge</div>
              </div>
              <div className="">
                <h2>Социальные сети</h2>
              </div>
            </div>
          </div>
          <div className=" w-7/12 flex flex-col items-center">
            <div className="info  flex flex-col justify-between items-center">
              <h2>Информация о студенте</h2>
              <span>{student.info}</span>
              <span>{student.infoBefore}</span>
            </div>
            <div className="skils flex flex-col justify-between items-center">
              <h2>Навыки</h2>
              <div className="flex justify-start items-center flex-wrap">
                {student?.skills.map((skill) => (
                  <ProgressBar
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                    type="circle"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
