import React, { useState } from 'react';
import './styles.css';

const MenuClosed = ({ action }) => (
  <div
    role="button"
    className="film__menu film__menu--closed"
    onClick={() => action(true)}
  >
    <div className="film__menu__dot" />
  </div>
);

const MenuOpened = ({ action, editFilm, deleteFilm }) => (
  <div className="film__menu film__menu--opened">
    <button
      className="film__menu__action"
      type="button"
      onClick={editFilm}
    >
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

export default FilmMenu;
