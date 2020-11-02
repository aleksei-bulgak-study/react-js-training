import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import createStore from './store';
import App from './app';

let preloadedState = {};

if (typeof window !== 'undefined') {
  // Grab the state from a global variable injected into the server-generated HTML
  // eslint-disable-next-line no-underscore-dangle
  preloadedState = window.__PRELOADED_STATE__;

  // Allow the passed state to be garbage-collected
  // eslint-disable-next-line no-underscore-dangle
  delete window.__PRELOADED_STATE__;
}

loadableReady(() => {
  ReactDOM.hydrate(
    <App Router={BrowserRouter} store={createStore(preloadedState)} />,
    document.getElementById('container'),
  );
});
