import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { inputClass, addButtonClass, inputContainerClass } from '../css/classnames';
import wordToColour from '../helpers/wordtocolour';

let AddTodo = ({ dispatch }) => {
  let input;
  let colourClass = 'black';

  let handleChange = (e) => {
    colourClass = wordToColour(e.target.value);
    input.className = `${inputClass} ${colourClass}`;
  };

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value, colourClass));
        input.value = '';
      }}>
      <div className={inputContainerClass}>
        <input placeholder="thing I should do" onChange={handleChange} className={inputClass} ref={node => {
          input = node;
        }} />
      <button type="submit" className={addButtonClass}>+</button>
      </div>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
