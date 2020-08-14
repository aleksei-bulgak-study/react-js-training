import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film';
import SearchResultsCount from './SearchResultsCount';
import './styles.css';

const FilmResultsList = ({ results, removeFilmAction, editFilmAction }) => (
  <section className="film-results">
    <SearchResultsCount count={results.length} />
    <div className="film-results__list">
      {results.map((filmDetails) => (
        <Film
          key={filmDetails.id}
          details={filmDetails}
          removeFilmAction={removeFilmAction}
          editFilmAction={editFilmAction}
        />
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
  removeFilmAction: PropTypes.func.isRequired,
  editFilmAction: PropTypes.func.isRequired,
};

export default FilmResultsList;
