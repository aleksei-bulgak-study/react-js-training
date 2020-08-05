import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film';
import './styles.css';

const SearchResultsCount = ({ count }) => (
  <div className="film-results__title">
    <p className="film-results__text">
      <span className="film-results__count">{count}</span>
      movies found
    </p>
  </div>
);

SearchResultsCount.propTypes = {
  count: PropTypes.number.isRequired,
};

const FilmResultsList = ({ results, removeFilmAction }) => (
  <section className="film-results">
    <SearchResultsCount count={results.length} />
    <div className="film-results__list">
      {results.map((filmDetails) => (
        <Film key={filmDetails.id} details={filmDetails} removeFilmAction={removeFilmAction} />
      ))}
    </div>
  </section>
);

FilmResultsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FilmResultsList;
