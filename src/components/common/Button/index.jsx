import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const DEFAULT = 'button';

const BUTTON_TYPES = {
  PRIMARY: DEFAULT,
  SECONDARY: `${DEFAULT} secondary`,
  ADDITIONAL: `${DEFAULT} additional`,
};

const Button = ({
  title,
  onClick,
  type,
  className,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`${type} ${className}`}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOfType(BUTTON_TYPES),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: BUTTON_TYPES.PRIMARY,
  className: '',
};

export { BUTTON_TYPES as types };
export default Button;
