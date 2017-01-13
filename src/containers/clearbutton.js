import React from 'react';
import { connect } from 'react-redux';
import { clearState } from '../actions';
import { clearButtonClass } from '../css/classnames';

let ClearButton = ({ onClick }) => (
  <button className={clearButtonClass} onClick={() => onClick()}>x</button>
);


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(clearState())
  };
};

ClearButton = connect(
  null,
  mapDispatchToProps
)(ClearButton);

export default ClearButton;
