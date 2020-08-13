import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import Filter from './Filter';
import SearchResults from './SearchResults';
import './styles.css';

const Main = ({
  blur,
  searchResults,
  removeFilmAction,
  editFilmAction,
}) => (
  <main className={blur ? 'blured' : ''}>
    <ErrorBoundary>
      <Wrapper>
        <Filter />
        <SearchResults
          searchResults={searchResults}
          removeFilmAction={removeFilmAction}
          editFilmAction={editFilmAction}
        />
      </Wrapper>
    </ErrorBoundary>
  </main>
);

Main.propTypes = {
  blur: PropTypes.bool.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  removeFilmAction: PropTypes.func.isRequired,
  editFilmAction: PropTypes.func.isRequired,
};

export default Main;
