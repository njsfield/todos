import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/addtodo';
import VisibleTodoList from '../containers/visibletodolist';

const App = () => (
  <div className="mw7 pl5-l">
    <h2 className="f3 f2-m f1-l pa2">Todos</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
