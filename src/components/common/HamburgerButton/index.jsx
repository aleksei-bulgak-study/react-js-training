import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const HamburgerButton = ({ onClick, visible, additionalStyles }) => (
  <button
    type="button"
    className={`hamburger ${additionalStyles}`}
    style={{ display: visible ? 'inline-block' : 'none' }}
    onClick={onClick}
  >
    <div className="hamburger__dot" />
  </button>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  additionalStyles: PropTypes.string.isRequired,
};

export default HamburgerButton;
