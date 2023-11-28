import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  className,
  url = "",
  width = "100%",
  disabled = false,
  onClick,
}) => {
  return url ? (
    <Link className={className} to={url}>
      {text}
    </Link>
  ) : (
    <div className="form-group mt-3">
      <button
        className={className}
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
