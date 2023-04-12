import React, { useEffect } from 'react';
import { UnorderedList } from '@chakra-ui/react';
import TodoItem from '../TodoItem';
import useGetTodo from '../../lib/hook/useGetTodo';

export default function TodoList() {
  const [getTodos, isLoading, todos] = useGetTodo();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <UnorderedList ml={0}>
      {isLoading ? <p>Loading</p> : todos.map(todoData => <TodoItem key={todoData.id} todoData={todoData} />)}
    </UnorderedList>
  );
}
