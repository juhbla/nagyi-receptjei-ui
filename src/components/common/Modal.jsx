import { useState } from "react";
import { Link } from "react-router-dom";

import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import NumberAddOnInput from "./NumberAddOnInput";
import TextArea from "./TextArea";

const Modal = ({
  title,
  buttonText,
  routingButtonText = "",
  redirectUrl = "",
  isSuccessModal = true,
  onClick,
  closeModal,
}) => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    prepTime: 0,
    portion: 0,
    ingredients: [],
    content: "",
  });

  const [newIngredient, setNewIngredient] = useState([
    {
      name: "",
      amount: 0,
      unit: "",
    },
  ]);

  const handleTextChange = ({ currentTarget: input }) => {
    const updatedNewRecipe = { ...newRecipe };
    updatedNewRecipe[input.name] = input.value;
    setNewRecipe(updatedNewRecipe);
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    const updatedNewRecipe = { ...newRecipe };
    updatedNewRecipe[input.name] = parseInt(input.value);
    setNewRecipe(updatedNewRecipe);
  };

  const handleAddIngredient = () => {
    setNewIngredient([...newIngredient, { name: "", amount: 0, unit: "" }]);
  };

  return (
    <div
      className="modal-dialog modal-content"
      style={{
        position: "absolute",
        margin: "0",
        float: "left",
        left: "50%",
        top: "50%",
        transform: " translate(-50%, -50%)",
      }}
    >
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
      </div>
      <div className="modal-body">
        <form noValidate>
          <TextInput
            type="text"
            name="title"
            maxLength={25}
            labelText="Recept neve"
            onChange={handleTextChange}
          />
          <NumberAddOnInput
            name="prepTime"
            minValue={0}
            labelText="Elkészítési idő"
            addOnText="perc"
            onChange={handleNumberChange}
          />
          <NumberInput
            name="portion"
            labelText="Adag"
            minValue={1}
            onChange={handleNumberChange}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddIngredient}
          >
            Új hozzávaló
          </button>
          <TextArea
            name="content"
            maxLength={2000}
            labelText="Elkészítési mód"
            onChange={handleTextChange}
          />
        </form>
      </div>
      <div className="modal-footer">
        {isSuccessModal ? (
          <>
            <button type="button" className="btn btn-primary" onClick={onClick}>
              {buttonText}
            </button>
            <Link
              className="btn btn-secondary"
              data-dismiss="modal"
              to={redirectUrl}
            >
              {routingButtonText}
            </Link>
          </>
        ) : (
          <button type="button" className="btn btn-danger" onClick={onClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
