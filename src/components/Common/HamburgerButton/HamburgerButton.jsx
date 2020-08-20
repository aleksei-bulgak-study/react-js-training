import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const HamburgerButton = ({ onClick, visible, className }) => (
  <button
    type="button"
    className={`hamburger ${className}`}
    style={{ display: visible ? 'inline-block' : 'none' }}
    onClick={onClick}
  >
    <div className="hamburger__dot" />
  </button>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default HamburgerButton;
