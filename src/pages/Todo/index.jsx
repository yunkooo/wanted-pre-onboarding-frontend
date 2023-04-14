import { Box, Heading, Stack } from '@chakra-ui/react';
import TodoInput from '../../components/todo/TodoInput';
import TodoList from '../../components/todo/TodoList';
import { TodoProvider } from '../../context/todoContext';
import LogoutBtn from '../../components/todo/buttons/LogoutBtn';

const Todo = () => {
  return (
    <Box position={'relative'} w='sm' rounded={'lg'} bg={'gray.50'} py={8} px={10} textAlign={'center'}>
      <Heading fontSize={'3xl'} mb={4}>
        Todo List
      </Heading>

      <Stack mb={1} align={'flex-end'}>
        <LogoutBtn />
      </Stack>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </Box>
  );
};

export default Todo;
