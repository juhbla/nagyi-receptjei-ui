import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, PHOTOS } = endpoints;

const uploadPhoto = async (recipeId, photo) => {
  const endpointToCall = `${API_ROOT}${PHOTOS}/${recipeId}`;

  return await restClient.post(endpointToCall, photo);
};

export { uploadPhoto };
