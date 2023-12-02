const calculateIngredientAmountsForOnePortion = (ingredients, portion) => {
  let amountsForOnePortion = [];
  for (let i = 0; i < ingredients.length; i++) {
    const result = ingredients[i].amount / portion;

    amountsForOnePortion.push(result);
  }
  return amountsForOnePortion;
};

export { calculateIngredientAmountsForOnePortion };
