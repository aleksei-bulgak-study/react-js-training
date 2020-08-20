import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilmForm from '../Common/FilmForm';
import defaultGenres from '../../model/genres';

const AddFilm = ({ onClose }) => {
  const onSubmit = (data) => console.log(data);

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
};

export default AddFilm;
