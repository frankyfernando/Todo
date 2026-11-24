import './App.css';
import { useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  
  // Menambahkan todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Menghapus todo
  const removeTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header>To Do List</header>
      
      <div className='TodoContainer'>
        <TodoInput addTodo={addTodo}/>
        <TodoList todos={todos} removeTodos={removeTodos}/>
      </div>

    </div>
  );
}

export default App;
