import { useReducer } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.newTodo];

    default:
  }
};

const useTodo = initialState => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = newTodo => {
    dispatch({ type: 'ADD', newTodo });
  };
};
