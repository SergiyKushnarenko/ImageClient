import axios, { AxiosError } from 'axios';
import storageService from '../utils/storage.service';

const axiosConfig = {
  baseURL: import.meta.env.VITE_API_URL,
};

export const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  (req) => {
    const token = storageService.getToken();

    if (token && req.headers) {
      Object.assign(req.headers, { Authorization: `Bearer ${token}` });
    }

    return req;
  },
  (error: AxiosError) => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error('error during sending request', error);
  }
);

export default instance;
