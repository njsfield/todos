import React from 'react';
import Footer from './footer';
import AddColouredTodo from '../containers/addcolouredtodo';
import VisibleTodoList from '../containers/visibletodolist';
import { appContainerClass, titleClass } from '../css/classnames';

const App = () => (
  <div className={appContainerClass}>
    <h2><span className={titleClass}>Todos.</span></h2>
    <AddColouredTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
