import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import todoApp from './reducers';
import App from './components/app';

let enhancer = compose(
  persistState(null, {key: 'todostorage'})
);

let store = createStore(todoApp, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
