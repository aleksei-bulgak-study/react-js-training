import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const HamburgerButton = ({ onClick, visible, className }) => {
  const display = useMemo(() => (visible ? 'inline-block' : 'none'), [visible]);
  return (
    <button
      type="button"
      className={`hamburger ${className}`}
      style={{ display }}
      onClick={onClick}
    >
      <div className="hamburger__dot" />
    </button>
  );
};

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default HamburgerButton;
