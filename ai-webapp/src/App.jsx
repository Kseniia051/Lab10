import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Stats from './components/Stats';

function App() {
  const [todos, setTodos] = useState([]);       // список задач
  const [filter, setFilter] = useState('all');  // фильтр: all / today / tomorrow

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

 <TodoList todos={todos} setTodos={setTodos} filter={filter} />


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
      <Stats todos={todos} />
    </div>
  );
}

export default App;
