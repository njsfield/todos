import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/addtodo';
import VisibleTodoList from '../containers/visibletodolist';
import { appContainerClass, titleClass } from '../css/classnames';

const App = () => (
  <div className={appContainerClass}>
    <h2 className={titleClass}>Todos.</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
