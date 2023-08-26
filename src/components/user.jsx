import React from 'react';
import PropTypes, { object } from 'prop-types';
import Button from './button';

const User = ({ userData }) => {
  const handleClick = () => {

  }

  return (
    <li className="w-[300px] h-[400px] border border-gray-300 rounded-md shadow-lg flex flex-col justify-between items-center p-4">
      <div>
        <img src={userData.img} alt="image" />
      </div>
      <p>{userData.firstName} {userData.lastName}</p>
      <p>{userData.age} лет</p>
      <div>О себе: {userData.info}</div>
      <Button
        color='bg-blue-500'
        onClick={handleClick}
        text='открыть'
        rounded='rounded-md'
      />
    </li>
  );
};

User.propTypes = {
  userData: PropTypes.object.isRequired
};

export default User;