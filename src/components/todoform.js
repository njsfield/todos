import React from 'react';
import { inputClass, addButtonClass, inputContainerClass } from '../css/classnames';

let TodoForm = ({ addtodo, trackvalue, colourclass = 'black'}) => {
  let input;
  let combinedClassName = inputClass + ' ' + colourclass;

  let handleChange = (e) => {
    trackvalue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addtodo(input.value, colourclass);
        input.value = '';
      }}>
      <div className={inputContainerClass}>
        <input placeholder="thing I should do" onChange={handleChange} className={combinedClassName} ref={node => {
          input = node;
        }} />
      <button type="submit" className={addButtonClass}>+</button>
      </div>
      </form>
    </div>
  );
};

export default TodoForm;
