import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = ({ title, onClick }) => (
  <button className="menu__item" type="button" onClick={onClick}>
    {title}
  </button>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
