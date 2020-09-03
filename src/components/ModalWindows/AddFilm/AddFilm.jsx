import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmForm from '../../Common/FilmForm';
import defaultGenres from '../../../model/genres';
import { filmActions } from '../../../store/actions';

const AddFilm = ({ genres, onClose, onSubmit }) => {
  const availableGenres = useMemo(() => {
    const defaultGenresNames = defaultGenres.map((genre) => genre.value);
    const uniqueGenres = [...new Set([...genres, ...defaultGenresNames])].sort();
    return uniqueGenres.map((genre) => ({ label: genre, value: genre }));
  }, [genres]);
  return (
    <FilmForm
      title="add movie"
      onClose={onClose}
      onSubmit={onSubmit}
      defaultGenres={availableGenres}
    />
  );
};

AddFilm.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(filmActions.addFilm(data)),
});

const mapStateToProps = (state) => ({
  genres: state.films.genres.filter((genre) => genre !== 'All'),
});

export default connect(mapStateToProps, mapDispathToProps)(AddFilm);
