import axios from 'axios';

const api = axios.create({
  baseURL: 'https://assignment-api.piton.com.tr/api/v1/',
});

export default api;
