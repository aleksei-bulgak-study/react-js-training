import React from 'react';
import PropTypes from 'prop-types';
import './MenuOpened.css';
import CloseButton from '../../../Common/CloseButton';
import MenuItem from '../MenuItem';

const MenuOpened = ({ onClose, onEdit, onDelete }) => (
  <div className="film__menu film__menu--opened">
    <MenuItem title="Edit" onClick={onEdit} />
    <MenuItem title="Delete" onClick={onDelete} />
    <CloseButton
      className="film__menu__close"
      onClick={onClose}
      size="small"
    />
  </div>
);

MenuOpened.propTypes = {
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MenuOpened;
