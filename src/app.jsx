import React, { useState } from 'react';
import pageIds from './model/pages';
import { HomePage } from './views';
import './app.css';
import data from './local.json';

export default () => {
  const [state, setState] = useState({
    page: pageIds.home,
    preview: null,
    results: data,
  });

  const removeFilmById = (id) => {
    const filteredResults = state.results.filter(film => film.id !== id)
    setState({...state, results: filteredResults})
  }

  return (
    <>
      {(state.page === pageIds.home || state.page === pageIds.view) && (
        <HomePage preview={state.preview} results={state.results} removeFilmById={removeFilmById} />
      )}
    </>
  );
};
