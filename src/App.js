import './App.css';
import { useRef, useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const inputTodo = useRef(null);

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

  // Mengedit Todo
  const editTodo = (index) => {
    inputTodo.current.value = todos[index];
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header>To Do List</header>
      
      <div className='TodoContainer'>
        <TodoInput inputTodo={inputTodo} addTodo={addTodo}/>
        <TodoList editTodo={editTodo} todos={todos} removeTodos={removeTodos}/>
      </div>

    </div>
  );
}

export default App;
