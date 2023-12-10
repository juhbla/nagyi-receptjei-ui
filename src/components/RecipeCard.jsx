import { useState } from "react";

import Card from "./common/Card";
import Button from "./common/Button";

import { uploadPhoto } from "../services/photoService";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

const RecipeCard = ({ recipe, shouldShowFileInput = false }) => {
  const [uploadedPhotoFileName, setUploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (e) => {
    const photo = [...e.target.files][0];

    const formData = new FormData();
    formData.append("photoToUpload", photo);

    const { data } = await uploadPhoto(id, formData);
    const { fileName } = data;

    setUploadedPhotoFileName(fileName);
  };

  const { id, title, prepTime, portion, photoFileName } = recipe;

  const { API_ROOT, PHOTOS } = endpoints;

  let imageSource;

  if (photoFileName) {
    imageSource = `${API_ROOT}${PHOTOS}/${photoFileName}`;
  } else if (uploadedPhotoFileName) {
    imageSource = `${API_ROOT}${PHOTOS}/${uploadedPhotoFileName}`;
  } else {
    imageSource = noImage;
  }

  const contents = [
    { key: 1, value: `Elkészítési idő: ${prepTime} perc` },
    { key: 2, value: `${portion} adag` },
  ];

  return (
    <>
      <Card
        title={title}
        imageSource={imageSource}
        imageAlt={title}
        contents={contents}
        onChange={handlePhotoUpload}
        shouldShowFileInput={shouldShowFileInput}
      />
      <Button
        text="Irány a recept!"
        className="btn btn-primary"
        url={`recipe/${id}`}
      />
    </>
  );
};

export default RecipeCard;
