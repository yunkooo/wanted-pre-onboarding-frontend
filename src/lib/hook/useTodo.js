import { useReducer } from 'react';

const todoReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'SET':
      return [...action.todoList];

    case 'ADD':
      return [...state, action.newTodo];

    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);

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

  return [{ addTodo, setTodo, deleteTodo }, todos];
};

export default useTodo;
