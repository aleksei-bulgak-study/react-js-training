import React, { useState } from 'react';
import pageIds from './model/pages';
import { HomePage } from './containers';
import './app.css';
import data from './movies.json';

export default () => {
  const [state, setState] = useState({
    page: pageIds.home,
    results: data.slice(0, 10),
  });

  const setResults = (newResults) => {
    setState({ ...state, results: newResults });
  };

  return (
    <>
      {(state.page === pageIds.home || state.page === pageIds.view) && (
        <HomePage
          results={state.results}
          setResults={setResults}
        />
      )}
    </>
  );
};
