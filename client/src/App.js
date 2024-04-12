import React, { Fragment } from 'react';
import './App.css';

// components
import InputToDo from './components/InputTodo';
import ListToDos from './components/ListTodos';



function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
        <ListToDos />
      </div>      
    </Fragment>
  );
}

export default App;
