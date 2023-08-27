import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
import { useStudents } from "../hooks/useStudents";
import { getBookmarkStatus } from "../fakeApi/students";
import { useNavigate } from "react-router-dom";
import './user.css'

const User = ({ userData }) => {
  const bookmarkStatus = getBookmarkStatus(userData.id);
  const navigate = useNavigate();

  const { getFavorite } = useStudents();
  const handleClick = () => {
    navigate(`/${userData.id}`);
  };

  return (
    <li className="dark:bg-slate-700 w-[350px] h-[530px]  rounded-md  flex flex-col justify-between items-center p-4 user">
      <div>
        <img className="rounded-md" src={userData.img} alt="Личная фотография" />
      </div>
      <p className="dark:text-slate-100 font-bold mt-4">
        {userData.firstName} {userData.lastName}
      </p>
      <p className="dark:text-slate-100 mb-2">{userData.age} лет</p>
      <div className="dark:text-slate-100"><span className="text-slate-600">О себе:</span> {userData.info}</div>
      <div className="w-[316px] flex justify-between mt-4">
        <Button
          type="open"
          color="bg-blue-500"
          onClick={handleClick}
          text="открыть"
          rounded="rounded-md"
        />
        <Button
          color={bookmarkStatus ? "bg-red-500" : "bg-gray-600"}
          onClick={() => getFavorite(userData.id)}
          text={
            bookmarkStatus ? "удалить из избранного" : "добавить в избранное"
          }
          bg-gray-600
          rounded="rounded-md"
        />
      </div>
    </li>
  );
};

User.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default User;
