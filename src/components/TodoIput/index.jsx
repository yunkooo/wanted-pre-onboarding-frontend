import React from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function TodoInput() {
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack flexDirection={'row'} align={'flex-end'}>
        <Input id='todoInput' name='todo' />
        <Button type='submit' children={<AddIcon boxSize={6} />} />
      </Stack>
    </form>
  );
}
