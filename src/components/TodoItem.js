import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { ThemeContext } from '../contexts/ThemeContext';
import { DELETE_TODO } from '../reducers/types';

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);
  const { dispatchTodo } = useContext(TodoContext);

  return (
    <li className={`${theme.isLightTheme ? "light" : "dark"} todo-item`} onClick={() => dispatchTodo({
      type: DELETE_TODO,
      payload: {
        id: todo.id
      }
    })}>{todo.name}</li>
  )
}

export default TodoItem
