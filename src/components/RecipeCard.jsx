import { useState } from "react";

import Card from "./common/Card";

import noImage from "../images/no-image.png";

const RecipeCard = ({ recipe }) => {
  const [uploadedPhotoFileName] = useState("");

  const handlePhotoUpload = (e) => {
    console.log("Képfeltöltés...");
  };

  const { title, prepTime, portion, photoFileName } = recipe;

  let imageSource;

  if (photoFileName) {
    imageSource = photoFileName;
  } else {
    imageSource = noImage;
  }

  const contents = [
    { key: 1, value: "Elkészítési idő: " + prepTime + " perc" },
    { key: 2, value: portion + " adag" },
  ];

  return (
    <Card
      title={title}
      imageSource={imageSource}
      imageAlt={title}
      contents={contents}
      onChange={handlePhotoUpload}
    />
  );
};

export default RecipeCard;
