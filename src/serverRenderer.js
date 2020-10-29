import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import fs from 'fs';
import path from 'path';
import App from './app';

const stateScript = (preloadedState) =>
  `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
    preloadedState,
  ).replace(/</g, '\\u003c')}</script>`;

function renderWithIntitalState(store, url) {
  const context = {};

  const renderRoot = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <App context={context} location={url} Router={StaticRouter} store={store} />
  );

  renderToString(renderRoot());

  if (context.url) {
    const error = new Error(context.url);
    error.redirect = true;
    throw error;
  }

  return renderToString(renderRoot());
}

export default function renderHtml(store, url) {
  const html = renderWithIntitalState(store, url);
  const data = fs.readFileSync(path.join('./dist', 'index.html'), 'utf8');
  return data.replace(
    '<div id="container"></div>',
    `<div id="container">${html}</div>${stateScript(store.getState())}`,
  );
}
