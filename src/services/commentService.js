import restClient from "axios";
import endpoints from "../config/api.endpoints";

const { API_ROOT, COMMENTS } = endpoints;

const createComment = async (comment) => {
  const endpointToCall = `${API_ROOT}${COMMENTS}`;

  return await restClient.post(endpointToCall, comment);
};

const deleteComment = async (id) => {
  const endpointToCall = `${API_ROOT}${COMMENTS}/${id}`;

  return await restClient.delete(endpointToCall, id);
};

export { createComment, deleteComment };
