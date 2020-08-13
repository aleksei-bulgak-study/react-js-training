import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SIZES = ['small', 'large'];

const CloseButton = ({ size, positonStyles, onClick }) => (
  <button
    type="button"
    className={`close-button ${positonStyles} ${size}`}
    onClick={onClick}
  >
    Close
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(SIZES),
  positonStyles: PropTypes.string,
};

CloseButton.defaultProps = {
  size: SIZES[1],
  positonStyles: '',
};

export default CloseButton;
