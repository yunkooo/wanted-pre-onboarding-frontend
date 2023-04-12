import { createContext, useContext } from 'react';
import useTodo from '../lib/hook/useTodo';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [{ setTodo, addTodo, deleteTodo, updateTodo }, todos] = useTodo([]);

  const value = { todos, setTodo, addTodo, deleteTodo, updateTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);
