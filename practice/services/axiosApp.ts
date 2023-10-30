import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const AXIOS_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 10 * 60 * 1000,
};

const instance: AxiosInstance = axios.create(AXIOS_CONFIG);

// Short response data
instance.interceptors.response.use(
  <T>(value: AxiosResponse<T>): Promise<T> => Promise.resolve(value?.data),
  <T>(error: AxiosError<T>): Promise<T> =>
    Promise.reject(error?.response?.data),
);

export default instance;
