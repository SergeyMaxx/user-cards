import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";
import { transformAge } from "../utils/transformAge";
import ProgressBar from "../components/progressBar";
import { tgLogo, vkLogo } from "../images";
import MainSlider from "../components/mainSlider";

export default function StudentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getStudentById, isLoading } = useStudents();
  const student = getStudentById(id);
  useEffect(() => {
    if (!student && !isLoading) {
      navigate("/");
    }
  }, [student, isLoading, navigate]);

  return (
    student && (
      <section className=" my-20">
        <div className=" flex flex-col md:flex-row  justify-between gap-6 text-lg text-gray-800 ">
          <div className="w-full  md:w-5/12 ">
            <div className=" flex flex-col justify-between items-center gap-6 h-full">
              <div className=" w-full flex justify-center items-center rounded-xl border p-4">
                <img
                  src={student.img}
                  alt="Моя фотография"
                  className=" aspect-square object-cover rounded-xl "
                />
              </div>
              <div className=" flex flex-col justify-center items-center gap-6 rounded-xl border w-full p-4">
                <span className=" text-xl text-gray-800 font-medium">
                  {student.firstName} {student.lastName}
                </span>
                <span>
                  {"Возраст: "}
                  {transformAge(student.age)}
                </span>
                <div className="">{student.role}</div>
              </div>
              <div className=" h-full w-full"></div>
              <div className=" rounded-xl border w-full p-2">
                <h2 className=" text-2xl font-semibold text-[#151515] w-full text-center">
                  Социальные сети
                </h2>
                <div className=" flex justify-center items-center gap-6 py-4">
                  {student.social?.map((link) => (
                    <Link key={link.type} to={link.to} target="_blank">
                      <img
                        src={link.type === "tg" ? tgLogo : vkLogo}
                        alt="Telegram"
                        className={
                          (link.type === "vk" ? " scale-[1.4]" : "") +
                          " hover:opacity-80 transition duration-300"
                        }
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-7/12 flex flex-col items-center gap-6">
            <div className="info  flex flex-col justify-between items-start rounded-xl border w-full p-4">
              <h2 className=" text-2xl font-semibold text-[#151515] text-center w-full ">
                Информация о студенте
              </h2>
              <p className="indent-8">{student.info}</p>
              <p className="indent-8">{student.infoBefore}</p>
              <p className="indent-8">{student.projectRole}</p>
            </div>
            <div className="skils flex flex-col justify-between items-center rounded-xl border w-full p-4">
              <h2 className=" text-2xl font-semibold text-[#151515]">Навыки</h2>
              <div className="flex justify-center items-center flex-wrap">
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
            {student.portfolio?.length > 0 && (
              <div className="portfolio w-full  flex flex-col items-center  rounded-xl border p-4">
                <h2 className=" text-2xl font-semibold text-[#151515] text-center mb-6">
                  Портфолио работ
                </h2>
                <div className=" w-2/3">
                  <MainSlider
                    slidesLayouts={student.portfolio.map((slide, index) => (
                      <img
                        key={index}
                        src={slide}
                        alt="Портфолио"
                        className=" aspect-square object-cover"
                      />
                    ))}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
}
