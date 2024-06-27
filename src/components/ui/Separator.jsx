// src/components/ui/separator.jsx
import PropTypes from "prop-types";
import { ClassNames } from "@emotion/react";

const Separator = ({ className, vertical = false }) => {
  const baseStyles = "bg-gray-300";
  const orientationStyles = vertical ? "w-px h-full" : "h-px w-full";
  const separatorClassNames = classNames(
    baseStyles,
    orientationStyles,
    className
  );

  return <div className={separatorClassNames} />;
};

Separator.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

export default Separator;
