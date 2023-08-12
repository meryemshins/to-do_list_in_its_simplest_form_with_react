import React, { useState } from 'react';
import './App.css';
import TodoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <TodoList />
    </div>
  );
}

export default App;
