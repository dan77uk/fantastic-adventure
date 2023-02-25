import axios from "axios";
// const baseUrl = "/api/projects";
const baseUrl = "http://localhost:3001/api/projects";
// const baseUrl = "https://whatknot-api.onrender.com/api/projects";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const moveTask = (id, laneId) => {
  const request = axios.patch(`${baseUrl}/${id}/changeLane`, { lane: laneId });
  return request.then((response) => response.data);
};

export default { getAll, moveTask };
