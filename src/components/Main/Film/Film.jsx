import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import FilmSettings from '../FilmSettings';
import dateFormat from '../../../utils/formatDate';
import genresFormatter from '../../../utils/arrayToStringFormatter';
import Poster from '../../Common/Poster';
import FilmActions from '../../../providers/filmActionsProvider';
import defaultPoster from '../../../../public/images/default_poster.png';
import './styles.css';

const Film = ({ details }) => {
  const { onFilmDeletion, onFilmEdit, onFilmPreview } = useContext(FilmActions);
  const onEdit = useCallback(() => onFilmEdit(details), [onFilmEdit, details]);
  const onDelete = useCallback(() => onFilmDeletion(details), [
    onFilmDeletion,
    details,
  ]);
  const onPreview = useCallback(() => onFilmPreview(details), [
    details,
    onFilmPreview,
  ]);

  return (
    <div className="film-results__item film">
      <Poster
        src={details.poster_path}
        alt={details.title}
        fallback={defaultPoster}
        className="film__logo"
      />
      <div className="film__description">
        <button className="film__title" type="button" onClick={onPreview}>
          {details.title}
        </button>
        <p className="film__genre">{genresFormatter(details.genres, ', ')}</p>
        <p className="film__release-year">{dateFormat(details.release_date)}</p>
      </div>
      <FilmSettings
        onDelete={onDelete}
        onEdit={onEdit}
        className="film-results__settings"
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
};

export default Film;
