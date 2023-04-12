import { useReducer } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return [...action.todoList];

    case 'ADD':
      return [...state, action.newTodo];

    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);

    case 'MODIFY':
      return state.map(todo => (todo.id !== action.updateTodo.id ? todo : action.updateTodo));

    default:
  }
};

const useTodo = initialState => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const setTodo = todoList => {
    dispatch({ type: 'SET', todoList });
  };

  const addTodo = newTodo => {
    dispatch({ type: 'ADD', newTodo });
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE', id });
  };

  const updateTodo = updateTodo => {
    dispatch({ type: 'MODIFY', updateTodo });
  };

  return [{ addTodo, setTodo, deleteTodo, updateTodo }, todos];
};

export default useTodo;
