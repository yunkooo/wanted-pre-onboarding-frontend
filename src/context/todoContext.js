import { createContext, useContext } from 'react';
import useTodo from '../lib/hook/useTodo';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [{ setTodos, addTodo }, todos] = useTodo([]);

  const value = { todos, setTodos, addTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);
