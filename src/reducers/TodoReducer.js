import { GET_TODOS, SET_TODOS, ADD_TODO, DELETE_TODO } from './types';

export const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case SET_TODOS: {
      console.log("saving todos");
      localStorage.setItem("todos", JSON.stringify(payload.todos));
      return state;
    }

    case GET_TODOS: {
      console.log("Getting todos");
      const todos = localStorage.getItem("todos");
      if (todos) state = JSON.parse(todos);
      return state;
    }

    case ADD_TODO: {
      console.log("Add todos");
      return [...state, payload];
    }

    case DELETE_TODO: {
      console.log("Delete todos");
      const newTodos = state.filter(todo => todo.id !== payload.id);
      return newTodos;
    }
    default: {
      return state;
    }
  }
}
