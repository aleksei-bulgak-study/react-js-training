import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Film from '../Film';
import SearchResultsCount from './SearchResultsCount';
import { filmActions, commonActions } from '../../../store/actions';

import './styles.css';

const FilmResultsList = ({
  films,
  onFilmDeletion,
  onFilmEdit,
  onFilmPreview,
}) => (
  <section className="film-results">
    <SearchResultsCount count={films.length} />
    <div className="film-results__list">
      {films.map((filmDetails) => (
        <Film
          key={filmDetails.id}
          details={filmDetails}
          onFilmDeletion={onFilmDeletion}
          onFilmEdit={onFilmEdit}
          onFilmPreview={onFilmPreview}
        />
      ))}
    </div>
  </section>
);

FilmResultsList.propTypes = {
  films: PropTypes.arrayOf(
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

const mapStateToProps = (state) => ({ films: state.films.filteredResults });
const mapDispatchToProps = (dispatch) => ({
  onFilmPreview: (film) => dispatch(filmActions.previewFilm(film)),
  onFilmDeletion: (film) =>
    dispatch(
      filmActions.filmForProcessing({
        type: commonActions.types.DELETE_FILM,
        film,
      }),
    ),
  onFilmEdit: (film) =>
    dispatch(
      filmActions.filmForProcessing({
        type: commonActions.types.EDIT_FILM,
        film,
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmResultsList);
