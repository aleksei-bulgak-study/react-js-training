import React from 'react';
import PropTypes from 'prop-types';
import './CloseButton.css';

const SIZES = ['small', 'large'];

const CloseButton = ({ size, className, onClick }) => (
  <button
    type="button"
    className={`close-button ${className} ${size}`}
    onClick={onClick}
  >
    Close
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(SIZES),
  className: PropTypes.string,
};

CloseButton.defaultProps = {
  size: SIZES[1],
  className: '',
};

export default CloseButton;
