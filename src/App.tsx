import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import { Todo } from './types/Todo';
import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <>
    <div className="App">
      <h1>Static list of todos</h1>
    </div>

    <div className="list">
      <TodoList todos={preparedTodos} />
    </div>
  </>
);

export default App;
