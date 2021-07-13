import React, { useRef, useContext } from 'react'
import { AuthorizedContext } from '../contexts/AuthorizedContext';
import { TodoContext } from '../contexts/TodoContext';
import { ADD_TODO, HANDLE_SUBMIT } from '../reducers/types';

const TodoForm = () => {
  const todoRef = useRef();
  const { authorized, dispatchAuthor } = useContext(AuthorizedContext);
  const { dispatchTodo } = useContext(TodoContext);

  function handleAddTodo() {
    dispatchAuthor({
      type: HANDLE_SUBMIT
    })
    if (!authorized.isAuthorized || !todoRef.current.value) {
      todoRef.current.value = "";
      return;
    }

    dispatchTodo({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        name: todoRef.current.value
      }
    });
    todoRef.current.value = "";
  }

  return (
    <>
      <input type="text" placeholder="Enter new Todo" ref={todoRef} />
      {!authorized.isAuthorized && authorized.isSubmit && <div style={{color: "red"}}>Please login</div>}
      <button onClick={handleAddTodo}>Add</button>
    </>
  )
}

export default TodoForm
