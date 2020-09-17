import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Film from '../Film';
import SearchResultsCount from './SearchResultsCount';
import { filmActions, commonActions } from '../../../store/actions';

import './styles.css';

const FilmResultsList = ({
  films,
  filmsFound,
  onFilmDeletion,
  onFilmEdit,
  onFilmPreview,
}) => {
  const history = useHistory();
  const onPreview = useCallback(
    (data) => {
      history.push(`/films/${data.id}`);
      onFilmPreview(data);
    },
    [history, onFilmPreview],
  );
  return (
    <section className="film-results">
      <SearchResultsCount count={filmsFound} />
      <div className="film-results__list">
        {films.map((filmDetails) => (
          <Film
            key={filmDetails.id}
            details={filmDetails}
            onFilmDeletion={onFilmDeletion}
            onFilmEdit={onFilmEdit}
            onFilmPreview={onPreview}
          />
        ))}
      </div>
    </section>
  );
};

FilmResultsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      genre: PropTypes.string,
      releaseYear: PropTypes.string,
    }).isRequired,
  ).isRequired,
  filmsFound: PropTypes.number,
  onFilmDeletion: PropTypes.func.isRequired,
  onFilmEdit: PropTypes.func.isRequired,
  onFilmPreview: PropTypes.func.isRequired,
};

FilmResultsList.defaultProps = {
  filmsFound: 0,
};

const mapStateToProps = (state) => ({
  films: state.films.filteredResults,
  filmsFound: state.films.total,
});
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
