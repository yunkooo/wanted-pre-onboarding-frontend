import { useCallback, useState, useEffect } from 'react';
import useTodo from './useTodo';
import { getApi } from '../../api/todo';

const useGetTodo = () => {
  const [{ setTodo }, todos] = useTodo();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = useCallback(async () => {
    const res = await getApi();

    setTodo(res);
    setIsLoading(false);
  }, [setTodo]);

  return [getTodos, isLoading, todos];
};

export default useGetTodo;
