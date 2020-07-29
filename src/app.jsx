import React, { useState } from 'react';
import pageIds from './model/pages';
import { HomePage } from './views';
import './app.css';

export default () => {
  const [state] = useState({
    page: pageIds.home,
    preview: null,
  });
  return (
    <>
      {(state.page === pageIds.home || state.page === pageIds.view) && (
        <HomePage preview={state.preview} />
      )}
    </>
  );
};
