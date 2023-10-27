import axios from 'axios';

const AXIOS_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 10 * 60 * 1000,
};

const instance = axios.create(AXIOS_CONFIG);

export default instance;
