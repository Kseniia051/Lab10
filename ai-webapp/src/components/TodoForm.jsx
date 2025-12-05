import React, { useState } from 'react';

function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState('');
  const [day, setDay] = useState('today'); // по умолчанию "сегодня"

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const date = new Date();
    if (day === 'tomorrow') date.setDate(date.getDate() + 1);

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      date: date.toISOString().split('T')[0],
    };

    setTodos([newTodo, ...todos]);
    setInput('');
    setDay('today');
  };

  return (
    <form onSubmit={addTodo} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Добавить задачу..."
      />
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="today">Сегодня</option>
        <option value="tomorrow">Завтра</option>
      </select>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TodoForm;
