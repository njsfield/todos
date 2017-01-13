import React from 'react';
import { connect } from 'react-redux';
import { addTodo, trackValue } from '../actions';
import TodoForm from '../components/todoform';

const mapStateToProps = (state, ownProps) => {
  return {
    colourclass: state.todoColour
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addtodo: (text, colour) => dispatch(addTodo(text, colour)),
    trackvalue: (val) => dispatch(trackValue(val))
  };
};

const AddColouredTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default AddColouredTodo;
