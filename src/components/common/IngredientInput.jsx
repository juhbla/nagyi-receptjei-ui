import TextInput from "./TextInput";
import NumberInput from "./NumberInput";

const IngredientInput = ({
  index,
  ingredient,
  onIngredientChange,
  onIngredientRemove,
}) => {
  return (
    <div className="mb-3">
      <div className="d-flex">
        <TextInput
          type="text"
          name={`ingredientName${index}`}
          value={ingredient.name}
          onChange={(e) => onIngredientChange(index, "name", e.target.value)}
          labelText="Hozzávaló neve"
        />
        <NumberInput
          name={`ingredientAmount${index}`}
          value={ingredient.amount}
          minValue={0}
          onChange={(e) => onIngredientChange(index, "amount", e.target.value)}
          labelText="Mennyiség"
        />
        <TextInput
          type="text"
          name={`ingredientUnit${index}`}
          value={ingredient.unit}
          onChange={(e) => onIngredientChange(index, "unit", e.target.value)}
          labelText="Mértékegység"
        />
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={() => onIngredientRemove(index)}
        >
          Töröl
        </button>
      </div>
    </div>
  );
};

export default IngredientInput;
