import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const DEFAULT = 'button';

const BUTTON_TYPES = {
  PRIMARY: DEFAULT,
  SECONDARY: `${DEFAULT} secondary`,
  ADDITIONAL: `${DEFAULT} additional`,
};

const Button = ({ title, onClick, type, className }) => (
  <button type="button" onClick={onClick} className={`${type} ${className}`}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(
    Object.keys(BUTTON_TYPES).map((type) => BUTTON_TYPES[type]),
  ),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: BUTTON_TYPES.PRIMARY,
  className: '',
  onClick: null,
};

export { BUTTON_TYPES as types };
export default Button;
