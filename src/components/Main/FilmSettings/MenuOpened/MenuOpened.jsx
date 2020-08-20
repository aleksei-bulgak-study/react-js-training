import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CloseButton from '../../../Common/CloseButton';
import MenuItem from '../MenuItem';

const MenuOpened = ({ onClose, editFilm, deleteFilm }) => (
  <div className="film__menu film__menu--opened">
    <MenuItem title="Edit" onClick={editFilm} />
    <MenuItem title="Delete" onClick={deleteFilm} />
    <CloseButton
      className="film__menu__close"
      onClick={onClose}
      size="small"
    />
  </div>
);

MenuOpened.propTypes = {
  onClose: PropTypes.func.isRequired,
  editFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

export default MenuOpened;
