import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CloseButton from '../../../Common/CloseButton';
import MenuItem from '../MenuItem';

const MenuOpened = ({ closeAction, editFilm, deleteFilm }) => (
  <div className="film__menu film__menu--opened">
    <MenuItem title="Edit" onClick={editFilm} />
    <MenuItem title="Delete" onClick={deleteFilm} />
    <CloseButton
      positonStyles="film__menu__close"
      onClick={closeAction}
      size="small"
    />
  </div>
);

MenuOpened.propTypes = {
  closeAction: PropTypes.func.isRequired,
  editFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

export default MenuOpened;
