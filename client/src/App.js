import React, { Fragment } from 'react';
import './App.css';

// components
import InputToDo from './components/InputTodo';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
      </div>      
    </Fragment>
  );
}

export default App;
