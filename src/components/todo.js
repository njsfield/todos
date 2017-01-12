import React, { PropTypes } from 'react';
import { listItemClass, listItemClassComplete } from '../css/classnames';

const Todo = ({ onClick, completed, text, colour }) => (
  <li className={completed ? `${listItemClassComplete} ${colour}` : `${listItemClass} ${colour}`}
    onClick={onClick}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired
};

export default Todo;
