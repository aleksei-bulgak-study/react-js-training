import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import MenuOpened from './MenuOpened';
import HamburgerButton from '../../Common/HamburgerButton';

const FilmSettings = ({ onEdit, onDelete, className}) => {
  const [isOpened, setIsOpened] = useState(false);
  const onOpen = useCallback((value) => setIsOpened(value), [setIsOpened]);
  const onClose = useCallback(() => setIsOpened(false), [setIsOpened]);

  return (
    <div className={className}>
      {!isOpened && (
        <HamburgerButton onClick={onOpen} className="film__menu" />
      )}
      {isOpened && (
        <MenuOpened
          onClose={onClose}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

FilmSettings.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FilmSettings.defaultProps = {
  className: '',
}

export default FilmSettings;
