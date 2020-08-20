import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import MenuOpened from './MenuOpened';
import HamburgerButton from '../../Common/HamburgerButton';

const FilmSettings = ({ editAction, deleteAction, visible }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {!isOpened && (
        <HamburgerButton
          onClick={() => setIsOpened(true)}
          visible={visible}
          className="film__menu"
        />
      )}
      {isOpened && (
        <MenuOpened
          onClose={() => setIsOpened(false)}
          editFilm={editAction}
          deleteFilm={deleteAction}
        />
      )}
    </>
  );
};

FilmSettings.propTypes = {
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default FilmSettings;
