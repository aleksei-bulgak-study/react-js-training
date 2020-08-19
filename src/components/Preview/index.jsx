import React from 'react';
import Poster from './Poster';
import FilmDescription from './FilmDescription';
import PropTypes from 'prop-types';
import './styles.css';

const Preview = ({ preview, closePreviewAction }) => (
  <div className="film-preview">
    <Poster src={preview.poster_path} alt={preview.title} width={250} />
    <FilmDescription
      details={preview}
    />
    <button
      className="film-preview__search"
      type="button"
      onClick={closePreviewAction}
    >
      Back to search
    </button>
  </div>
);

Preview.propTypes = {
  preview: PropTypes.func.isRequired,
  closePreviewAction: PropTypes.func.isRequired,
};

export default Preview;
