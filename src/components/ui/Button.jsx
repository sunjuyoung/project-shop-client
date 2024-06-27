// src/components/ui/button.jsx
import React from "react";
import PropTypes from "prop-types";
import { ClassNames } from "@emotion/react";

const Button = ({ children, className, variant = "primary", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const buttonClassNames = classNames(
    baseStyles,
    variantStyles[variant],
    className
  );

  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "outline"]),
};

export default Button;
