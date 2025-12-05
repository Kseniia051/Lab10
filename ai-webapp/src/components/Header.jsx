import React from 'react';

function Header({ filter, setFilter }) {
  return (
    <header>
      <h1>Todo Pro</h1>
      <div>
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Все</button>
        <button onClick={() => setFilter('today')} className={filter === 'today' ? 'active' : ''}>Сегодня</button>
        <button onClick={() => setFilter('tomorrow')} className={filter === 'tomorrow' ? 'active' : ''}>Завтра</button>
      </div>
    </header>
  );
}

export default Header;
