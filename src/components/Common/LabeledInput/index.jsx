import React from 'react';
import PropTypes from 'prop-types';

const LabeledInput = ({
  id,
  title,
  disabled,
  value,
}) => (
  <label htmlFor={id}>
    {title}
    <input id={id} type="text" style={{ disabled }} value={value} />
  </label>
);

LabeledInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};

LabeledInput.defaultProps = {
  disabled: false,
  value: '',
};

export default LabeledInput;
