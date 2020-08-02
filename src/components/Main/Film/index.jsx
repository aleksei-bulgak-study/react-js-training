import React from 'react';
import PropTypes from 'prop-types';
import FilmSettings from '../FilmSettings';
import './styles.css';

const Film = ({ details }) => (
  <div className="film-results__item film">
    <img className="film__logo" src={details.url} alt="Pulp fiction" />
    <div className="film__description">
      <button className="film__title" type="button">
        {details.title}
      </button>
      <p className="film__genre">{details.genre}</p>
      <p className="film__release-year">{details.releaseYear}</p>
    </div>
    <FilmSettings />
  </div>
);

Film.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
  }).isRequired,
};

export default Film;
