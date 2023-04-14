import React, { useRef } from 'react';
import { Button, Input, Stack, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { createApi } from '../../../api/todo';
import { useTodoContext } from '../../../context/todoContext';

export default function TodoInput() {
  const todoInput = useRef();
  const toastMessage = useToast();

  const { addTodo } = useTodoContext();

  const submitHandler = async e => {
    e.preventDefault();
    const newTodo = todoInput.current.value;

    if (!newTodo) {
      toastMessage({
        title: `할일을 입력해주세요.`,
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
      return;
    }
    const res = await createApi(newTodo);

    if (res.status === 201) {
      addTodo(res.data);
      todoInput.current.value = '';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack flexDirection={'row'} align={'flex-end'}>
        <Input id='todoInput' data-testid='new-todo-input' ref={todoInput} name='todo' />
        <Button type='submit' data-testid='new-todo-add-button' children={<AddIcon boxSize={5} />} />
      </Stack>
    </form>
  );
}
