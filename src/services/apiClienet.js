import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // 공통 백엔드 API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;