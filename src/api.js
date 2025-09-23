import axios from 'axios';

const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3000';
console.log('API URL usada:', baseURL);
const api = axios.create({baseURL});

export default api