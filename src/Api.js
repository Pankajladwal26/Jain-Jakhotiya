import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1'; // You can replace with your backend URL

// Create an axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
