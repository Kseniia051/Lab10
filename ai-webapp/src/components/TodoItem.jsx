import React from 'react';

function TodoItem({ todo, todos, setTodos }) {
  const toggleComplete = () => {
    setTodos(
      todos.map(t =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="buttons">
        <button onClick={toggleComplete} className="complete-btn">
          {todo.completed ? 'Отменить' : 'Выполнено'}
        </button>
        <button onClick={deleteTodo} className="delete-btn">Удалить</button>
      </div>
    </div>
  );
}

export default TodoItem;
