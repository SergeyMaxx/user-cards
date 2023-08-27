import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";
import { transformAge } from "../utils/transformAge";
import ProgressBar from "../components/progressBar";
import { tgLogo, vkLogo } from "../images";
import MainSlider from "../components/mainSlider";
import Badge from "../components/badge";
import { randomColor } from "../utils/randomColor";
import Button from "../components/button";
import { getBookmarkStatus } from "../fakeApi/students";
import CommentsProvider from "../hooks/useComments";
import Comments from "../components/comments/comments";
import Breadcrumbs from "../components/breadcrumbs";

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
  const bookmarkStatus = getBookmarkStatus(id);
  const { getFavorite } = useStudents();
  return (
    student && (
      <section className=" my-10">
        <div className=" flex flex-col md:flex-row  justify-between gap-6 text-lg text-gray-800 ">
          <div className="w-full  md:w-5/12 ">
            <div className=" flex flex-col items-center gap-6 h-full">
              <div className=" w-full flex justify-center items-center rounded-xl border p-4">
                <img
                  src={student.img}
                  alt="Моя фотография"
                  className=" aspect-square object-cover rounded-xl "
                />
              </div>
              <div className=" flex flex-col justify-center items-center gap-6 rounded-xl border w-full p-4">
                <span className="dark:text-slate-100 text-xl text-gray-800 font-medium">
                  {student.firstName} {student.lastName}
                </span>
                <span className="dark:text-slate-100">
                  {"Возраст: "}
                  {transformAge(student.age)}
                </span>
                <div className="">
                  <Badge color={randomColor()} text={student.role} />
                </div>
              </div>
              <div className="  w-full  flex justify-center">
                <Button
                  color={bookmarkStatus ? "bg-red-500" : "bg-gray-600"}
                  onClick={() => getFavorite(id)}
                  text={
                    bookmarkStatus
                      ? "удалить из избранного"
                      : "добавить в избранное"
                  }
                  bg-gray-600
                  rounded="rounded-md"
                />
              </div>
              {student.hobbies.length !== 0 && (
                <div className="w-full rounded-xl border p-[15px]">
                  <h2 className="dark:text-slate-100 mb-[15px] text-2xl font-semibold text-[#151515] w-full text-center">
                    Хобби
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {student.hobbies.map((hobby) => (
                      <Badge key={hobby} color={randomColor()} text={hobby} />
                    ))}
                  </div>
                </div>
              )}
              <div className=" rounded-xl border w-full p-2">
                <h2 className="dark:text-slate-100 text-2xl font-semibold text-[#151515] w-full text-center">
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
              <h2 className="dark:text-slate-100 mb-[10px] text-2xl font-semibold text-[#151515] text-center w-full ">
                Информация о студенте
              </h2>
              <p className="dark:text-slate-100 ml-[10px] mb-[10px]">
                <span className="dark:text-slate-400 text-[#979797]">
                  Обо мне:
                </span>{" "}
                {student.info}
              </p>
              <p className="dark:text-slate-100 ml-[10px] mb-[10px]">
                <span className="dark:text-slate-400 text-[#979797]">
                  Предыстория:
                </span>{" "}
                {student.infoBefore}
              </p>
              <p className="dark:text-slate-100 ml-[10px]">
                <span className="dark:text-slate-400 text-[#979797]">
                  Роль в проекте:
                </span>{" "}
                {student.projectRole}
              </p>
            </div>
            <div className="skils flex flex-col justify-between items-center rounded-xl border w-full p-4">
              <h2 className="dark:text-slate-100 mb-[10px] text-2xl font-semibold text-[#151515]">
                Навыки
              </h2>
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
                <h2 className="dark:text-slate-100 text-2xl font-semibold text-[#151515] text-center mb-6">
                  Портфолио работ
                </h2>
                <div className=" w-2/3">
                  <MainSlider
                    slidesLayouts={student.portfolio.map((slide, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <img
                          src={slide}
                          alt="Портфолио"
                          className=" aspect-square object-cover"
                        />
                      </div>
                    ))}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="">
          <CommentsProvider>
            <Comments />
          </CommentsProvider>
        </div>
      </section>
    )
  );
}
