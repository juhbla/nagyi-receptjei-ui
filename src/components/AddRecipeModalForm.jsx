import { useState } from "react";

import TextInput from "./common/TextInput";
import NumberInput from "./common/NumberInput";
import NumberAddOnInput from "./common/NumberAddOnInput";
import TextArea from "./common/TextArea";
import Button from "./common/Button";

import { createRecipe } from "../services/recipeService";

const AddRecipeModalForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    prepTime: 0,
    portion: 1,
    ingredients: [],
    content: "",
  });

  const [ingredient, setIngredient] = useState({
    name: "",
    amount: 1,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await createRecipe(recipe);
    const { statusCode } = data;

    if (statusCode === 400) {
      alert("Hiba történt!");
    }

    if (statusCode === 200) {
      window.location.href = "/";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="modal-dialog modal-content"
        style={{
          position: "absolute",
          margin: "0",
          float: "left",
          left: "50%",
          top: "50%",
          transform: " translate(-50%, 75%)",
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title">Új recept</h5>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <TextInput
                name="title"
                maxLength={25}
                labelText="Recept neve"
                onChange={handleRecipeTextChange}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <NumberAddOnInput
                name="prepTime"
                minValue={0}
                labelText="Elkészítési idő"
                addOnText="perc"
                onChange={handleRecipeNumberChange}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <NumberInput
                name="portion"
                labelText="Adag"
                minValue={1}
                value={recipe.portion}
                onChange={handleRecipeNumberChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <TextInput
                name="name"
                labelText="Hozzávaló neve"
                value={ingredient.name}
                onChange={handleIngredientTextChange}
                required={false}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <NumberInput
                name="amount"
                minValue={0}
                labelText="Mennyiség"
                value={ingredient.amount}
                onChange={handleIngredientNumberChange}
                required={false}
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <TextInput
                name="unit"
                labelText="Egység"
                value={ingredient.unit}
                onChange={handleIngredientTextChange}
                required={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-12">
              <ol className="mt-3 mb-3" style={{ listStyleType: "inherit" }}>
                {recipe.ingredients.map((ingredient) => (
                  <li>{`${ingredient.name} ${ingredient.amount} ${ingredient.unit}`}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-12">
              <Button
                text="Új hozzávaló"
                className="btn btn-primary"
                onClick={handleAddIngredient}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <TextArea
                name="content"
                maxLength={2000}
                labelText="Elkészítési mód"
                onChange={handleRecipeTextChange}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button className="btn btn-primary" text="Hozzáadás" />
        </div>
      </div>
    </form>
  );
};

export default AddRecipeModalForm;
