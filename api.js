// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/', // Asegúrate de que esta URL sea la correcta para tu instancia de Strapi
});

export default api;
