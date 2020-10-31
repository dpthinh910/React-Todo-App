import React from 'react';
import TodoItems from './TodoItems';
const TodoList = ({todos, setTodos, filteredTodos}) => 
{
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItems todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} todo={todo} />
      ))}
      </ul>
    </div>
  );
}
export default TodoList;