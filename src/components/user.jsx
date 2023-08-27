import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
import { useStudents } from "../hooks/useStudents";
import { getBookmarkStatus } from "../fakeApi/students";
import { useNavigate } from "react-router-dom";

const User = ({ userData }) => {
  const bookmarkStatus = getBookmarkStatus(userData.id);
  const navigate = useNavigate();

  const { getFavorite } = useStudents();
  const handleClick = () => {
    navigate(`/${userData.id}`);
  };

  return (
    <li className="w-[350px] h-[530px] border border-gray-300 rounded-md shadow-sm flex flex-col justify-between items-center p-4 hover:shadow-xl transition duration-300">
      <div>
        <img src={userData.img} alt="Личная фотография" />
      </div>
      <p className="font-bold mt-4">
        {userData.firstName} {userData.lastName}
      </p>
      <p className="mb-2">{userData.age} лет</p>
      <div><span className="text-[#979797]">О себе:</span> {userData.info}</div>
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
