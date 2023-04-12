import React, { useState } from 'react';
import { Stack, ListItem, Input, Button, Text, Checkbox, useToast } from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import DeleteBtn from '../buttons/DeleteBtn';
import { updateApi } from '../../../api/todo';
import { useTodoContext } from '../../../context/todoContext';

export default function TodoItem({ todoData }) {
  const toastMessage = useToast();

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

  const updateHandler = async e => {
    e.preventDefault();
    if (!window.confirm('수정 하시겠습니까?')) return;

    const {
      todoUpdateInput: { value },
    } = e.currentTarget;

    if (value === '') {
      toastMessage({
        title: `할일을 입력해주세요.`,
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
      return;
    }
    const res = await updateApi({ ...todoData, todo: value });

    if (res.status === 200) {
      updateTodo(res.data);
      setIsModify(false);
    } else if (value === '') {
      toastMessage({
        title: `${res.data.message}`,
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
    }
  };

  return (
    <>
      {isModify ? (
        <form onSubmit={updateHandler}>
          <Stack flexDirection={'row'} align={'center'} justify='space-between'>
            <Input w={'200px'} name={'todoUpdateInput'} defaultValue={`${todo}`} h={8} />
            <Button type='submit' bg={'inherit'} w={2}>
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
