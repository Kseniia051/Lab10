import React from 'react';

const Stats = ({ todos }) => {
  const completed = todos.filter(todo => todo.completed).length;
  const remaining = todos.length - completed;

  return (
    <div className="stats">
      <p>Выполнено: {completed}</p>
      <p>Осталось: {remaining}</p>
    </div>
  );
};

export default Stats;
