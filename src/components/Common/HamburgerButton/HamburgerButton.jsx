import React from 'react';
import PropTypes from 'prop-types';
import './HamburgerButton.css';

const HamburgerButton = ({ onClick, className }) => {
  return (
    <button
      type="button"
      className={`hamburger ${className}`}
      onClick={onClick}
    >
      <div className="hamburger__dot" />
    </button>
  );
};

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default HamburgerButton;
