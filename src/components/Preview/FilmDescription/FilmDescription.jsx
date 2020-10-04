import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';

import './styles.css';

const FilmDescription = ({ details }) => (
  <div className="film-preview__description">
    <h1 className="description__title">{details.title}</h1>
    <p className="description__rating">{details.vote_average || 0}</p>
    <p className="description__tagline">{details.tagline}</p>
    <p className="description__release">{formatDate(details.release_date)}</p>
    <p className="description__runtime">{details.runtime}</p>
    <p className="description__overview">{details.overview}</p>
  </div>
);

FilmDescription.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default FilmDescription;
