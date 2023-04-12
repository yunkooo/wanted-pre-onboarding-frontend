import React, { useCallback, useEffect, useState } from 'react';
import { UnorderedList, Spinner } from '@chakra-ui/react';
import TodoItem from '../TodoItem';
import { useTodoContext } from '../../../context/todoContext';
import { getApi } from '../../../api/todo';

export default function TodoList() {
  const { todos, setTodo } = useTodoContext();
  const [isLoading, setIsLoading] = useState(true);

  const getTodos = useCallback(async () => {
    const res = await getApi();

    setTodo(res);
    setIsLoading(false);
  }, [setTodo]);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <UnorderedList ml={0}>
      {isLoading ? <Spinner mt={4} /> : todos?.map(todoData => <TodoItem key={todoData.id} todoData={todoData} />)}
    </UnorderedList>
  );
}
