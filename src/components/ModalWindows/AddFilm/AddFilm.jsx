import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmForm from '../../Common/FilmForm';
import defaultGenres from '../../../model/genres';
import { filmActions } from '../../../store/actions';

const AddFilm = ({ onClose, onSubmit }) => {
  return (
    <FilmForm
      title="add movie"
      onClose={onClose}
      onSubmit={onSubmit}
      defaultGenres={defaultGenres}
    />
  );
};

AddFilm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(filmActions.addFilm(data)),
});

export default connect(null, mapDispathToProps)(AddFilm);
