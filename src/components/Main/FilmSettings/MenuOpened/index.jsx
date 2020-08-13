import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CloseButton from '../../../Common/CloseButton';

const MenuOpened = ({ closeAction, editFilm, deleteFilm }) => (
  <div className="film__menu film__menu--opened">
    <button className="film__menu__action" type="button" onClick={editFilm}>
      Edit
    </button>
    <button className="film__menu__action" type="button" onClick={deleteFilm}>
      Delete
    </button>
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
