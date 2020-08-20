import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({ src, alt, width }) => (
  <img className="preview__logo" src={src} alt={alt} width={width} />
);

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
};

Poster.defaultProps = {
  alt: 'logo',
  width: '500'
};

export default Poster;
