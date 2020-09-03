import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { HomePage } from './containers';
import './app.css';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
