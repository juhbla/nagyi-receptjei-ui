import React from "react";

import FileInput from "./FileInput";

export function Card({ title, imageSource, imageAlt, contents, onChange }) {
  return (
    <div className="card mt-3 mb-3">
      <label htmlFor="photo-upload">
        <img
          src={imageSource}
          className="card-img-top"
          style={{
            width: "250px",
            height: "250px",
            display: "block",
            margin: "0 auto",
            objectFit: "contain",
          }}
          alt={imageAlt}
        />
        <FileInput
          id="photo-upload"
          disabled={!imageSource.includes("no-image")}
          onChange={onChange}
        />
      </label>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {contents.map((content) => (
          <p className="card-text" key={content.key}>
            {content.value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;
