import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  className,
  id = "",
  url = "",
  width = "100%",
  disabled = false,
  onClick,
}) => {
  return url ? (
    <Link style={{ width: width }} className={className} to={url}>
      {text}
    </Link>
  ) : (
    <div className="form-group mt-3">
      <button
        className={className}
        id={id}
        style={{ width: width }}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
