import React from 'react';
import PropTypes from 'prop-types';
import FilmDescription from './FilmDescription';
import Poster from '../Common/Poster';

import './Preview.css';

const Preview = ({ preview, onPreviewClose }) => (
  <div className="film-preview">
    <Poster
      src={preview.poster_path}
      alt={preview.title}
      className="film-preview__logo"
    />
    <FilmDescription details={preview} />
    <button
      className="film-preview__search"
      type="button"
      onClick={onPreviewClose}
    >
      Back to search
    </button>
  </div>
);

Preview.propTypes = {
  preview: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  onPreviewClose: PropTypes.func.isRequired,
};

Preview.defaultProps = {
  preview: {},
};

export default Preview;
