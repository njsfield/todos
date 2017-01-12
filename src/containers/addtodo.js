import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input placeholder="thing I should do" className="input-reset outline-0 pa3 pl0 w-80 bb bt-0 bl-0 br-0 ml3" ref={node => {
          input = node;
        }} />
      <button type="submit" className="dn">
          Add
        </button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
