import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MenuClosed = ({ action }) => (
  <button
    type="button"
    className="film__menu film__menu--closed"
    onClick={() => action(true)}
  >
    <div className="film__menu__dot" />
  </button>
);

MenuClosed.propTypes = {
  action: PropTypes.func.isRequired,
};

const MenuOpened = ({ action, editFilm, deleteFilm }) => (
  <div className="film__menu film__menu--opened">
    <button className="film__menu__action" type="button" onClick={editFilm}>
      Edit
    </button>
    <button className="film__menu__action" type="button" onClick={deleteFilm}>
      Delete
    </button>
    <button
      className="film__menu__close"
      type="button"
      onClick={() => action(false)}
    >
      Close
    </button>
  </div>
);

MenuOpened.propTypes = {
  action: PropTypes.func.isRequired,
  editFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
};

const FilmMenu = ({ editAction, deleteAction }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {!isOpened && <MenuClosed action={setIsOpened} />}
      {isOpened && (
        <MenuOpened
          action={setIsOpened}
          editFilm={editAction}
          deleteFilm={deleteAction}
        />
      )}
    </>
  );
};

FilmMenu.propTypes = {
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default FilmMenu;
