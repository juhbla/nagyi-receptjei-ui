import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import NumberAddOnInput from "./NumberAddOnInput";
import TextArea from "./TextArea";
import { useState } from "react";
import IngredientInput from "./IngredientInput";
const Modal = ({
  title,
  buttonText,
  routingButtonText = "",
  redirectUrl = "",
  isSuccessModal = true,
  onClick,
  closeModal,
}) => {
  const [ingredients, setIngredients] = useState([
    { name: "", quantity: 0, unit: "" },
  ]);

  const handleIngredientChange = (index, property, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][property] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: 0, unit: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
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
        <form>
          <TextInput
            type="text"
            name="title"
            maxLength={25}
            labelText="Recept neve"
          />
          <NumberAddOnInput
            name="prep_time"
            value={0}
            minValue={0}
            labelText="Elkészítési idő"
            addOnText="perc"
          />
          <NumberInput name="portion" labelText="Adag" minValue={1} />

          {ingredients.map((ingredient, index) => (
            <IngredientInput
              key={index}
              index={index}
              ingredient={ingredient}
              onIngredientChange={handleIngredientChange}
              onIngredientRemove={handleRemoveIngredient}
            />
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddIngredient}
          >
            Új hozzávaló
          </button>
          <TextArea
            name="content"
            maxLength={500}
            labelText="Elkészítési mód"
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
