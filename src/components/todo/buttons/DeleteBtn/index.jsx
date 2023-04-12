import React from 'react';
import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useTodoContext } from '../../../../context/todoContext';
import { deleteApi } from '../../../../api/todo';

export default function DeleteBtn({ todoId }) {
  const { deleteTodo } = useTodoContext();

  const deleteHandler = async todoId => {
    if (!window.confirm('‼️ 삭제하시겠습니까?')) return;

    const res = await deleteApi(todoId);

    if (res.status === 204) {
      deleteTodo(todoId);
    }
  };

  return (
    <Button onClick={() => deleteHandler(todoId)} mt={0} bg={'inherit'} w={'min-content'}>
      <DeleteIcon />
    </Button>
  );
}
