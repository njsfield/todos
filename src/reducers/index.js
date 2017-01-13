import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityfilter';
import todoColour from './todocolour';


const topReducers = combineReducers({
  todos,
  visibilityFilter,
  todoColour
});

const initialState = topReducers({}, {});

const todoApp = (state, action) => {
  if (action.type === 'CLEAR_STATE') {
    state = initialState;
  }
  return topReducers(state, action);
};


export default todoApp;
