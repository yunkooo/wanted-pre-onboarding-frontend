import React, { useState } from 'react';
import { Stack, ListItem, Input, Button, Text, Checkbox } from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import DeleteBtn from '../buttons/DeleteBtn';
import { updateApi } from '../../../api/todo';
import { useTodoContext } from '../../../context/todoContext';

export default function TodoItem({ todoData }) {
  const { id, isCompleted, todo } = todoData;
  const { updateTodo } = useTodoContext();

  const [isModify, setIsModify] = useState(false);
  const [isCheck, setIsCheck] = useState(isCompleted);

  const checkedHandler = async () => {
    setIsCheck(prev => !isCheck);
    const res = await updateApi({ ...todoData, isCompleted: !isCheck });

    if (res.status === 200) {
      updateTodo(res.data);
    }
  };

  return (
    <>
      {isModify ? (
        <form>
          <Stack flexDirection={'row'} align={'center'} justify='space-between'>
            <Input w={'200px'} h={8} />
            <Button bg={'inherit'} w={2}>
              <CheckIcon />
            </Button>
            <Button
              bg={'inherit'}
              w={2}
              onClick={() => {
                setIsModify(!isModify);
              }}
            >
              <CloseIcon />
            </Button>
          </Stack>
        </form>
      ) : (
        <ListItem listStyleType={'none'}>
          <Stack flexDirection={'row'} align={'center'} justify='space-between'>
            <Checkbox
              isChecked={isCheck}
              onChange={() => {
                checkedHandler();
              }}
              colorScheme='green'
              mt={'0.5rem'}
              w={'200px'}
            >
              <Text as='b' mt={'0.5rem'} textAlign={'left'}>
                {todo}
              </Text>
            </Checkbox>
            <Button mt={0} bg={'inherit'} w={'min-content'} onClick={() => setIsModify(!isModify)}>
              <EditIcon />
            </Button>
            <DeleteBtn todoId={id} />
          </Stack>
        </ListItem>
      )}
    </>
  );
}
