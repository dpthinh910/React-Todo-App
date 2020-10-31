import React from 'react';


const TodoItems = ({text, todo, setTodos, todos}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => 
      element.id !== todo.id,
    ));
  };
  const completeHandler = () => {
    setTodos(todos.map(items => {
      if(items.id === todo.id) {
        return {
          ...items, completed: !items.completed,
        }
      }
      return items;
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-items ${todo.completed ? "completed" : ""}`}>{text}</li>
<button onClick={completeHandler} className="complete-btn">
  <i className="fas fa-check"></i>
</button>
<button onClick={deleteHandler} className="trash-btn">
  <i className="fas fa-trash"></i>
</button>
    </div>
  );
}
export default TodoItems;