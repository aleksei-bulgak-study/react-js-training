import React from 'react';
import PropTypes from 'prop-types';

const LabeledInput = ({ id, title, disabled, value, onChange, type, name }) => (
  <label htmlFor={id}>
    {title}
    <input
      id={id}
      name={name}
      type={type}
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
  name: PropTypes.string,
  type: PropTypes.string
};

LabeledInput.defaultProps = {
  disabled: false,
  value: '',
  name: '',
  type: 'text',
};

export default LabeledInput;
