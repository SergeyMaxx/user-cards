import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, onClick, text, rounded, disabled }) => {
  return (
    <button
      className={`${color} text-white px-4 py-2 ${rounded} shadow-lg font-semibold mк-2`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  onclick: PropTypes.func,
  text: PropTypes.string,
  rounded: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
