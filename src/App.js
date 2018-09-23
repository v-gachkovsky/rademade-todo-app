import React from 'react';
import ToDoList from './containers/ToDoList';

import './App.css';

export const App = () => (
  <div className="Container">
    <div className="App">
      <h1>
        Rademade ToDo App
      </h1>

      <ToDoList />
    </div>
  </div>
);

export default App;
