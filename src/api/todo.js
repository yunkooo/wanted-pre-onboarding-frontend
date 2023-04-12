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

export const getApi = async () => {
  try {
    const res = await axiosAuthInstance.get('/todos');

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const deleteApi = async id => {
  try {
    const res = await axiosAuthInstance.delete(`/todos/${id}`);

    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const updateApi = async ({ id, todo, isCompleted }) => {
  try {
    const res = await axiosAuthInstance.put(`/todos/${id}`, { todo, isCompleted });

    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
