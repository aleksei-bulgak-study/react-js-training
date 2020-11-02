import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import defaultPoster from '../../../../public/images/default_poster.png';

const Poster = ({ src, alt, fallback, className, width, height }) => {
  const [path, setPath] = useState(src);

  const replaceToFallbackImage = () => setPath(fallback);

  useEffect(() => setPath(src), [src]);

  return (
    <img
      className={`${className} lazyload`}
      src={path}
      alt={alt}
      onError={replaceToFallbackImage}
      height={height}
      width={width}
    />
  );
};

Poster.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Poster.defaultProps = {
  alt: 'film poster logo',
  src: defaultPoster,
  fallback: defaultPoster,
  className: 'logo',
  width: '333',
  height: '500'
};

export default Poster;
