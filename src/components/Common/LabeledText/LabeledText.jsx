import React from 'react';
import PropTypes from 'prop-types';
import './LabeledText.css';

const LabeledText = ({ id, title, value, className }) => (
  <label htmlFor={id} className='labeled-title'>
    {title}
    <p id={id} className={className}>
      {value}
    </p>
  </label>
);

LabeledText.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

LabeledText.defaultProps = {
  value: '',
  className: 'labeled-text',
};

export default LabeledText;
