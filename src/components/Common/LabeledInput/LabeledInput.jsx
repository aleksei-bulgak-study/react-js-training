import React from 'react';
import PropTypes from 'prop-types';

const LabeledInput = ({ id, title, disabled, value, onChange }) => (
  <label htmlFor={id}>
    {title}
    <input
      id={id}
      type="text"
      style={{ disabled }}
      value={value}
      onChange={onChange}
    />
  </label>
);

LabeledInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

LabeledInput.defaultProps = {
  disabled: false,
  value: '',
};

export default LabeledInput;
