import React from 'react';
import PropTypes from 'prop-types';

const LabeledInput = ({
  id,
  title,
  disabled,
  value,
  onChange,
  onBlur,
  type,
  name,
  error,
}) => (
  <div className="labeled-input">
    <label htmlFor={id} className="labeled-input__input">
      {title}
      <input
        id={id}
        name={name}
        type={type}
        style={{ disabled }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
    {error !== '' && <p className="labeled-input__error">{error}</p>}
  </div>
);

LabeledInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  onBlur: PropTypes.func,
};

LabeledInput.defaultProps = {
  disabled: false,
  value: '',
  name: '',
  type: 'text',
  error: '',
  onBlur: null,
};

export default LabeledInput;
