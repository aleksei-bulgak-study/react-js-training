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
  filterByGenreAction,
  sortingAction,
}) => (
  <main className={blur ? 'blured' : ''}>
    <ErrorBoundary>
      <Wrapper>
        <Filter
          filterByGenreAction={filterByGenreAction}
          sortingAction={sortingAction}
        />
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      genre: PropTypes.string,
      releaseYear: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeFilmAction: PropTypes.func.isRequired,
  editFilmAction: PropTypes.func.isRequired,
  filterByGenreAction: PropTypes.func.isRequired,
  sortingAction: PropTypes.func.isRequired,
};

export default Main;
