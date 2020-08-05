import React from 'react';
import PropTypes from 'prop-types';
import FilmResults from '../FilmResults';
import NotFound from '../NotFound';
import './styles.css';

const SearchResults = (props) => (
  <>
    {console.log(props.searchResults)}
    {console.log(!props.searchResults)}
    {props.searchResults && <FilmResults results={props.searchResults} removeFilmAction={props.removeFilmAction} />}
    {(!props.searchResults || !props.searchResults.length) && <NotFound />}
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
