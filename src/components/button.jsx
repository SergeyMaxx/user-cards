import React from 'react';
import PropTypes from 'prop-types'

const Button = ({color, onClick, text, rounded}) => {
  return (
    <button
      className={`${color} text-white px-4 py-2 ${rounded} shadow-lg font-semibold ml-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onclick: PropTypes.func,
  text: PropTypes.string,
  rounded: PropTypes.string
};


export default Button;