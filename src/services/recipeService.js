import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, RECIPES } = endpoints;

const getRecipes = async () => {
  const endpointToCall = `${API_ROOT}${RECIPES}`;

  return await restClient.get(endpointToCall);
};

const createRecipe = async (recipe) => {
  const endpointToCall = `${API_ROOT}${RECIPES}`;

  return await restClient.post(endpointToCall, recipe);
};

export { getRecipes, createRecipe };
