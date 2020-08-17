import React from 'react';
import PropTypes from 'prop-types';
import FilmResults from '../FilmResults';
import NotFound from '../NotFound';
import './styles.css';

const SearchResults = ({ searchResults, removeFilmAction, editFilmAction }) => (
  <>
    {searchResults && (
      <FilmResults
        results={searchResults}
        removeFilmAction={removeFilmAction}
        editFilmAction={editFilmAction}
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
  removeFilmAction: PropTypes.func.isRequired,
  editFilmAction: PropTypes.func.isRequired,
};

export default SearchResults;
