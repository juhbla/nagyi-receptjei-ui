import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, USERS } = endpoints;

const authenticate = async (username, password) => {
  const endpointToCall = `${API_ROOT}${USERS}?username=${username}&password=${password}`;

  return await restClient.get(endpointToCall);
};

const createUser = async (user) => {
  const endpointToCall = `${API_ROOT}${USERS}`;

  return await restClient.post(endpointToCall, user);
};

export { authenticate, createUser };
