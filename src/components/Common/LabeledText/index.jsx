import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const LabeledText = ({ id, title, value }) => (
  <label htmlFor={id}>
    {title}
    <p id={id}>{value}</p>
  </label>
);

LabeledText.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
};

LabeledText.defaultProps = {
  value: '',
};

export default LabeledText;
