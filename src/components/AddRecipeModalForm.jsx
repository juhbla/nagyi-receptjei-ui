import { useState } from "react";

import TextInput from "./common/TextInput";
import NumberInput from "./common/NumberInput";
import NumberAddOnInput from "./common/NumberAddOnInput";
import TextArea from "./common/TextArea";
import Button from "./common/Button";

const AddRecipeModalForm = ({
  title,
  buttonText,
  isSuccessModal = true,
  onClick,
}) => {
  const [recipe, setRecipe] = useState({
    title: "",
    prepTime: 0,
    portion: 0,
    ingredients: [],
    content: "",
  });

  const [ingredient, setIngredient] = useState({
    name: "",
    amount: 0,
    unit: "",
  });

  const handleRecipeTextChange = ({ currentTarget: input }) => {
    const updatedRecipe = { ...recipe };
    updatedRecipe[input.name] = input.value;
    setRecipe(updatedRecipe);
  };

  const handleRecipeNumberChange = ({ currentTarget: input }) => {
    const updatedRecipe = { ...recipe };
    updatedRecipe[input.name] = parseInt(input.value);
    setRecipe(updatedRecipe);
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();

    const updatedRecipe = { ...recipe };
    updatedRecipe.ingredients.push(ingredient);
    setRecipe(updatedRecipe);
    setIngredient({ name: "", amount: 0, unit: "" });
  };

  const handleIngredientTextChange = ({ currentTarget: input }) => {
    const updatedIngredient = { ...ingredient };
    updatedIngredient[input.name] = input.value;
    setIngredient(updatedIngredient);
  };

  const handleIngredientNumberChange = ({ currentTarget: input }) => {
    const updatedIngredient = { ...ingredient };
    updatedIngredient[input.name] = parseInt(input.value);
    setIngredient(updatedIngredient);
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
            name="title"
            maxLength={25}
            labelText="Recept neve"
            onChange={handleRecipeTextChange}
          />
          <NumberAddOnInput
            name="prepTime"
            minValue={0}
            labelText="Elkészítési idő"
            addOnText="perc"
            onChange={handleRecipeNumberChange}
          />
          <NumberInput
            name="portion"
            labelText="Adag"
            minValue={1}
            onChange={handleRecipeNumberChange}
          />
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <TextInput
                name="name"
                labelText="Hozzávaló neve"
                value={ingredient.name}
                onChange={handleIngredientTextChange}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <NumberInput
                name="amount"
                minValue={0}
                labelText="Mennyiség"
                value={ingredient.amount}
                onChange={handleIngredientNumberChange}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <TextInput
                name="unit"
                labelText="Egység"
                value={ingredient.unit}
                onChange={handleIngredientTextChange}
              />
            </div>
          </div>
          <Button text="Új hozzávaló" onClick={handleAddIngredient} />
          <TextArea
            name="content"
            maxLength={2000}
            labelText="Elkészítési mód"
            onChange={handleRecipeTextChange}
          />
        </form>
      </div>
      <div className="modal-footer">
        {isSuccessModal ? (
          <>
            <button type="button" className="btn btn-primary" onClick={onClick}>
              {buttonText}
            </button>
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

export default AddRecipeModalForm;
