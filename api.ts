import axios, { Method } from 'axios';

const instance = axios.create({ baseURL: 'http://127.0.0.1:8000/api/v1/' });

const callApi = async (
  method: Method,
  url: string,
  data?: any,
  jwt?: string,
  params?: object
) => {
  const headers = {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
  };
  return await instance({
    method,
    headers,
    url,
    data,
    params,
  });
};

export default {
  createAccount: (form: any) => callApi('post', 'users/', form),
  login: (form: any) => callApi('post', 'users/login/', form),
  rooms: (page = 1, token) =>
    callApi('get', `rooms/?page=${page}`, null, token),
  favs: (id, token) => callApi('get', `users/${id}/favs/`, null, token),
  toggleFav: (userId, roomId, token) =>
    callApi('put', `users/${userId}/favs/`, { pk: roomId }, token),
  search: (form, token) => callApi('get', 'rooms/search/', null, token, form),
};
