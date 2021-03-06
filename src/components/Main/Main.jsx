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
  onFilmDeletion,
  onFilmEdit,
  onFilterByGenre,
  onSorting,
  onFilmPreview,
}) => (
  <main className={blur ? 'blured' : ''}>
    <ErrorBoundary>
      <Wrapper>
        <Filter
          onFilterByGenre={onFilterByGenre}
          onSorting={onSorting}
        />
        <SearchResults
          searchResults={searchResults}
          onFilmDeletion={onFilmDeletion}
          onFilmEdit={onFilmEdit}
          onFilmPreview={onFilmPreview}
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
  onFilmDeletion: PropTypes.func.isRequired,
  onFilmEdit: PropTypes.func.isRequired,
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired,
  onFilmPreview: PropTypes.func.isRequired,
};

export default Main;
