import React, { useRef } from 'react';
import { Button, Input, Stack, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { createApi } from '../../api/todo';

export default function TodoInput() {
  const todoInput = useRef();
  const toastMessage = useToast();

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
    await createApi(newTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack flexDirection={'row'} align={'flex-end'}>
        <Input id='todoInput' ref={todoInput} name='todo' />
        <Button type='submit' children={<AddIcon boxSize={5} />} />
      </Stack>
    </form>
  );
}
