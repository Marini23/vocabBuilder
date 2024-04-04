import axios from 'axios';
import { selectToken } from '../src/redux/selectors'; // Update the path as per your project structure

const api = axios.create({
  baseURL: 'https://vocab-builder-backend.p.goit.global/api',
});

api.interceptors.request.use(config => {
  const token = selectToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
