import { createContext } from "react";
import React, { useEffect, useReducer } from 'react';
import { GET_TODOS, SET_TODOS } from '../reducers/types';
import { todoReducer } from '../reducers/TodoReducer';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatchTodo] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatchTodo({
      type: GET_TODOS, 
      payload: null
    })
  }, [])

  useEffect(() => {
    dispatchTodo({
      type: SET_TODOS,
      payload: { todos }
    })
  }, [todos])

  const TodoContextData = {
    todos,
    dispatchTodo
  }

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;