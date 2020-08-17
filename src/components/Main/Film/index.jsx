import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilmSettings from '../FilmSettings';
import dateFormat from '../../../utils/formatDate';
import genresFormatter from '../../../utils/arrayToStringFormatter';
import './styles.css';

const Film = ({ details, removeFilmAction, preview, editFilmAction }) => {
  const [hovered, setHovered] = useState(false);

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
        <button
          className="film__title"
          type="button"
          onClick={preview}
        >
          {details.title}
        </button>
        <p className="film__genre">{genresFormatter(details.genres, ', ')}</p>
        <p className="film__release-year">{dateFormat(details.release_date)}</p>
      </div>
      <FilmSettings
        deleteAction={() => removeFilmAction(details.id)}
        editAction={() => editFilmAction(details)}
        visible={hovered}
      />
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
  removeFilmAction: PropTypes.func.isRequired,
  preview: PropTypes.func.isRequired,
  editFilmAction: PropTypes.func.isRequired,
};

export default Film;
