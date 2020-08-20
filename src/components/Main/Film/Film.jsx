import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import FilmSettings from '../FilmSettings';
import dateFormat from '../../../utils/formatDate';
import genresFormatter from '../../../utils/arrayToStringFormatter';
import './styles.css';

const Film = ({ details, onFilmDeletion, onFilmEdit, onFilmPreview }) => {
  const [hovered, setHovered] = useState(false);
  const onEdit = useCallback(() => onFilmEdit(details), [
    onFilmEdit,
    details,
  ]);
  const onDelete = useCallback(() => onFilmDeletion(details.id), [
    onFilmDeletion,
    details,
  ]);

  return (
    <div
      className="film-results__item film"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className="film__logo"
        src={details.poster_path}
        alt={details.title}
      />
      <div className="film__description">
        <button className="film__title" type="button" onClick={onFilmPreview}>
          {details.title}
        </button>
        <p className="film__genre">{genresFormatter(details.genres, ', ')}</p>
        <p className="film__release-year">{dateFormat(details.release_date)}</p>
      </div>
      <FilmSettings onDelete={onDelete} onEdit={onEdit} visible={hovered} />
    </div>
  );
};

Film.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
  }).isRequired,
  onFilmDeletion: PropTypes.func.isRequired,
  onFilmPreview: PropTypes.func.isRequired,
  onFilmEdit: PropTypes.func.isRequired,
};

export default Film;
