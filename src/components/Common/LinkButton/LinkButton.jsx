import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './styles.css';

const LinkButton = ({ title, onClick }) => {
  return <Button title={title} onClick={onClick} className="link" />;
};

LinkButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

LinkButton.defaultProps = {
  title: '',
};

export default LinkButton;
