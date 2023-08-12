import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {  // ekle butonuna tıklandığında çalışacak işlemleri içerir
    if (newTodo.trim() !== '') {   //girişin boş olmadığından emin olunur
      setTodos([...todos, newTodo]); //listeye ekleme yapılır
      setNewTodo(''); // yeni yapılacak eklendiğinde sıfırlanır.
    }
  };

  const handleDeleteTodo = (index) => {  //sil butonuna tıklandığında çalışacak işlemler
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <input  // girdi için tip, value ekleme
        type="text"
        placeholder="Yeni yapılacak..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Ekle</button> 
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
