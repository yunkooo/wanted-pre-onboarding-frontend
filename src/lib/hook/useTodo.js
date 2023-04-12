import { useReducer } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return [...action.todoList];

    case 'ADD':
      return [...state, action.newTodo];

    default:
  }
};

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setTodo = todoList => {
    dispatch({ type: 'SET', todoList });
  };

  const addTodo = newTodo => {
    dispatch({ type: 'ADD', newTodo });
  };

  return [{ addTodo, setTodo }, todos];
};

export default useTodo;
