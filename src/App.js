// Import react library
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
// Import other components to main app
import Form from './components/Form';
import TodoList from './components/Todo';

// Main function of the App

function App() {
  // useState
  const [inputText,setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the app refreshes
  useEffect(() => {
    getLocalTodos();
  },[])
   // useEffect 
   useEffect(() => {
     filteredHandler();
     saveLocalTodos();
   },[todos, status])

   //function 
  const filteredHandler = () => {
    switch(status){
      case 'completed' : 
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null ) {
      localStorage.setItem('todos',JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>
         My Todo List
        </h1>
      </header>
        <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus} filteredTodos={filteredTodos} />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
