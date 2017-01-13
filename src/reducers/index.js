import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityfilter';
import todoColour from './todocolour';


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  todoColour
});

export default todoApp;
