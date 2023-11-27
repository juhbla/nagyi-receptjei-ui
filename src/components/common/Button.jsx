import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  url = "",
  width = "100%",
  disabled = false,
  onClick,
}) => {
  return url ? (
    <Link className="btn btn-primary" to={url}>
      {text}
    </Link>
  ) : (
    <div className="form-group mt-3">
      <button
        className="btn btn-primary"
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
