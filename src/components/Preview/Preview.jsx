import React from 'react';
import Poster from './Poster';
import FilmDescription from './FilmDescription';
import PropTypes from 'prop-types';
import './styles.css';

const Preview = ({ preview, onPreviewClose }) => (
  <div className="film-preview">
    <Poster src={preview.poster_path} alt={preview.title} width={250} />
    <FilmDescription
      details={preview}
    />
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
    vote_average: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  onPreviewClose: PropTypes.func.isRequired,
};

export default Preview;
