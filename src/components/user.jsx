import React from 'react';
import PropTypes, { object } from 'prop-types';

const User = ({userData}) => {
  return (
    <li className="w-[250px] h-[400px] border border-gray-300 rounded-md shadow-lg flex justify-center items-center p-4">
      <h1>{userData.name} {userData.lastName}</h1>
    </li>
  );
};

User.propTypes = {
  userData: PropTypes.object.isRequired
};

export default User;