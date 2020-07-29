import React, { useState } from 'react';
import pageIds from './model/pages';
import { HomePage } from './views';
import './app.css';
import data from './local.json';

export default () => {
  const [state] = useState({
    page: pageIds.home,
    preview: null,
    results: data,
  });
  return (
    <>
      {(state.page === pageIds.home || state.page === pageIds.view) && (
        <HomePage preview={state.preview} results={state.results} />
      )}
    </>
  );
};
