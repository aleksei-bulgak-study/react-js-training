import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film';
import SearchResultsCount from './SearchResultsCount';
import './styles.css';

const FilmResultsList = ({ results, removeFilmAction, editFilmAction, previewFilmAction }) => (
  <section className="film-results">
    <SearchResultsCount count={results.length} />
    <div className="film-results__list">
      {results.map((filmDetails) => (
        <Film
          key={filmDetails.id}
          details={filmDetails}
          removeFilmAction={removeFilmAction}
          editFilmAction={editFilmAction}
          preview={() => previewFilmAction(filmDetails)}
        />
      ))}
    </div>
  </section>
);

FilmResultsList.propTypes = {
  results: PropTypes.arrayOf(
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
  previewFilmAction: PropTypes.func.isRequired,
};

export default FilmResultsList;
