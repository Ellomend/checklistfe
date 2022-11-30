import { config as dev_config } from '../dev/variables';

export const config = {
  BACKEND_URL: process.env.BACKEND_URL || dev_config.BACKEND_URL,
};
