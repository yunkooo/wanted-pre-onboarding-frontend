import { Box, Heading, Stack, Icon, Button } from '@chakra-ui/react';
import { GrLogout } from 'react-icons/gr';
import TodoInput from '../../components/todo/TodoInput';
import TodoList from '../../components/todo/TodoList';
import { TodoProvider } from '../../context/todoContext';

const Todo = () => {
  return (
    <Box position={'relative'} w='sm' rounded={'lg'} bg={'gray.50'} py={8} px={10} textAlign={'center'}>
      <Heading fontSize={'3xl'} mb={4}>
        Todo List
      </Heading>

      <Stack mb={1} align={'flex-end'}>
        <Button bg={'inherit'} position={'absolute'} top={'40px'} boxSize={'6'}>
          <Icon as={GrLogout} />
        </Button>
      </Stack>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </Box>
  );
};

export default Todo;
