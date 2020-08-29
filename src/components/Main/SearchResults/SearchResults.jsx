import React from 'react';
import PropTypes from 'prop-types';
import FilmResults from '../FilmResults';
import NotFound from '../NotFound';
import './styles.css';

const SearchResults = ({
  searchResults,
  onFilmDeletion,
  onFilmEdit,
  onFilmPreview,
}) => (
  <>
    {searchResults && (
      <FilmResults
        results={searchResults}
        onFilmDeletion={onFilmDeletion}
        onFilmEdit={onFilmEdit}
        onFilmPreview={onFilmPreview}
      />
    )}
    {(!searchResults || !searchResults.length) && <NotFound />}
  </>
);

SearchResults.propTypes = {
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
  onFilmPreview: PropTypes.func.isRequired,
};

export default SearchResults;
