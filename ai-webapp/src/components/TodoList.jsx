import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, filter }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'today') {
      return todo.date === new Date().toISOString().split('T')[0];
    } else if (filter === 'tomorrow') {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return todo.date === tomorrow.toISOString().split('T')[0];
    }
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? <p>Нет задач</p> :
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))
      }
    </div>
  );
}

export default TodoList;
