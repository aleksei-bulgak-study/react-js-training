import React from 'react';
import PropTypes from 'prop-types';
import FilmResults from '../film-results';
import NotFound from '../not-found';
import './styles.css';

const SearchResults = ({ searchResults }) => (
  <>
    {searchResults && <FilmResults results={searchResults} />}
    {!searchResults && <NotFound />}
  </>
);

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SearchResults;
