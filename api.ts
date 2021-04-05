import axios, { Method } from 'axios';

const instance = axios.create({ baseURL: 'http://127.0.0.1:8000/api/v1/' });

const callApi = async (method: Method, url: string, data?: any) => {
  const headers = {
    Authorization: 'token',
    'Content-Type': 'application/json',
  };
  return await instance({
    method,
    headers,
    url,
    data,
  });
};

export default {
  createAccount: (form: any) => callApi('post', 'users/', form),
  login: (form: any) => callApi('post', 'users/login/', form),
  rooms: (page = 1) => callApi('get', `rooms/?page=${page}`),
};
