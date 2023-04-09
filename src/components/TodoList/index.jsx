import React from 'react';
import { Stack, UnorderedList } from '@chakra-ui/react';
import TodoItem from '../TodoItem';

export default function TodoList() {
  return (
    <UnorderedList ml={0}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </UnorderedList>
  );
}
