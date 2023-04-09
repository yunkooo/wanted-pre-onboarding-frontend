import { AxiosError } from 'axios';
import { axiosInstance } from './client';

export const registerApi = async (email, password) => {
  try {
    const res = await axiosInstance.post('/auth/signup', { email, password });

    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
