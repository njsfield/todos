import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityfilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
