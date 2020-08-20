import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import MenuOpened from './MenuOpened';
import HamburgerButton from '../../Common/HamburgerButton';

const FilmSettings = ({ onEdit, onDelete, visible }) => {
  const [isOpened, setIsOpened] = useState(false);
  const onOpen = useCallback((value) => setIsOpened(value), [setIsOpened]);
  const onClose = useCallback(() => setIsOpened(false), [setIsOpened]);

  return (
    <>
      {!isOpened && (
        <HamburgerButton onClick={onOpen} visible={visible} className="film__menu" />
      )}
      {isOpened && (
        <MenuOpened
          onClose={onClose}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

FilmSettings.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default FilmSettings;
