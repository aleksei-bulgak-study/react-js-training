import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import './styles.css';
import Button from '../Common/Button';

const DeleteFilm = ({ closeAction, deleteAction }) => (
  <section className="delete-film">
    <ModalWindow title="Delete movie" closeAction={closeAction}>
      <p className="delete-film__description">
        Are you sure you want to delete this movie?
      </p>

      <Button
        title="Confirm"
        onClick={deleteAction}
        additionalStyles="delete-film__confirm"
      />
    </ModalWindow>
  </section>
);

DeleteFilm.propTypes = {
  closeAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default DeleteFilm;
