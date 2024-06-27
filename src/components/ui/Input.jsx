// src/components/ui/input.jsx
import React from "react";
import PropTypes from "prop-types";
import { ClassNames } from "@emotion/react";

const Input = ({ className, ...props }) => {
  const baseStyles =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2";
  const inputClassNames = classNames(
    baseStyles,
    "border-gray-300 focus:ring-blue-500",
    className
  );

  return <input className={inputClassNames} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
