import { AxiosError } from 'axios';
import { axiosAuthInstance } from './client';

export const createApi = async todo => {
  try {
    const res = await axiosAuthInstance.post('/todos', { todo });

    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
