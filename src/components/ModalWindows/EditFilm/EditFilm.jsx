import React from 'react';
import PropTypes from 'prop-types';
import defaultGenres from '../../../model/genres';
import FilmForm from '../../Common/FilmForm';

const readOnlyFields = ['id'];

const EditFilm = ({ onClose, details }) => {
  const onSubmit = (data) => console.log(data);

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
};

export default EditFilm;
