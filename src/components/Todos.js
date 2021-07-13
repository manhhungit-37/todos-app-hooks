import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { AuthorizedContext }
 from '../contexts/AuthorizedContext';

function Todos() {
  const { todos } = useContext(TodoContext);
  const { toggleTheme } = useContext(ThemeContext);
  const { authorized } = useContext(AuthorizedContext);

  return (
    <div className="todos">
      <TodoForm />
      {todos.length > 0 && authorized.isAuthorized ? todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      )) : <div>Not have Todos</div> }
      <button onClick={toggleTheme}>ToggleTheme</button>
    </div>
  );
}

export default Todos;