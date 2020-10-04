import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultGenres from '../../../model/genres';
import FilmForm from '../../Common/FilmForm';
import { filmActions, commonActions } from '../../../store/actions';

const EditFilm = ({ genres, details, onClose, onSubmit }) => {
  const availableGenres = useMemo(() => {
    const defaultGenresNames = defaultGenres.map((genre) => genre.value);
    const uniqueGenres = [
      ...new Set([...genres, ...defaultGenresNames]),
    ].sort();
    return uniqueGenres.map((genre) => ({ label: genre, value: genre }));
  }, [genres]);
  return (
    <FilmForm
      title="edit movie"
      initialState={details}
      onClose={onClose}
      onSubmit={onSubmit}
      defaultGenres={availableGenres}
    />
  );
};

EditFilm.propTypes = {
  onClose: PropTypes.func.isRequired,
  details: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispathToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(filmActions.editFilm(data)),
  onClose: () => dispatch(commonActions.closeModalWindow()),
});

const mapStateToProps = (state) => ({
  genres: state.films.genres.filter((genre) => genre !== 'All'),
  details: state.films.filmForProcessing,
});

export default connect(mapStateToProps, mapDispathToProps)(EditFilm);
