import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (object) => {
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (id, newObject) => {
  console.log(newObject);
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const anecdoteService = { getAll, createNew, update };
export default anecdoteService;
