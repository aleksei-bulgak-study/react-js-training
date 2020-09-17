import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className }) => (
  <img className={className} src={src} alt={alt} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  className: '',
};

export default Image;
