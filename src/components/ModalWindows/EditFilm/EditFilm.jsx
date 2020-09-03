import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultGenres from '../../../model/genres';
import FilmForm from '../../Common/FilmForm';
import { filmActions } from '../../../store/actions';

const readOnlyFields = ['id'];

const EditFilm = ({ details, onClose, onSubmit }) => {
  return (
    <FilmForm
      title="edit movie"
      initialState={details}
      onClose={onClose}
      onSubmit={onSubmit}
      defaultGenres={defaultGenres}
      readOnlyFields={readOnlyFields}
    />
  );
};

EditFilm.propTypes = {
  onClose: PropTypes.func.isRequired,
  details: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    url: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(filmActions.editFilm(data)),
});

export default connect(null, mapDispathToProps)(EditFilm);
