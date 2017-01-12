import React, { PropTypes } from 'react';
import Todo from './todo';
import { listContainerClass } from '../css/classnames';

const TodoList = ({ todos, onTodoClick }) => (
  <ul className={listContainerClass}>
    {todos.map(todo =>
      <Todo key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}/>
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
