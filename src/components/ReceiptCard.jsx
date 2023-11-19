import { useState } from "react";

import Card from "./common/Card";

import noImage from "../images/no-image.png";

const ReceiptCard = ({ receipt }) => {
  const [uploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (e) => {
    console.log("Képfeltöltés...");
  };

  const { name, description, price, photoFileName } = receipt;

  let imageSource;

  if (photoFileName) {
    imageSource = noImage; // TODO: API hívás.
  } else if (uploadedPhotoFileName) {
    imageSource = noImage; // TODO: API hívás.
  } else {
    imageSource = noImage;
  }

  const contents = [
    { key: 1, value: description },
    { key: 2, value: `${price}.- Forint` },
  ];

  return (
    <Card
      title={name}
      imageSource={imageSource}
      imageAlt={name}
      contents={contents}
      onChange={handlePhotoUpload}
    />
  );
};

export default ReceiptCard;
