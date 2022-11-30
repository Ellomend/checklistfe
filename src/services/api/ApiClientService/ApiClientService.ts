import axios, { AxiosInstance } from 'axios';
import { config as dev_config } from '../../../config/dev/variables';
import { config as prod_config } from '../../../config/prod/variables';

const config = process.env.NODE_ENV === 'production' ? prod_config : dev_config;

export const getClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: config.BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  client.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return client;
};

export class ApiClientService {
  static getClient() {
    return getClient();
  }
}
