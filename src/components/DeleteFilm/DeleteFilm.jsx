import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import './styles.css';
import Button from '../Common/Button';

const DeleteFilm = ({ onClose, onDelete }) => (
  <section className="delete-film">
    <ModalWindow title="Delete movie" onClose={onClose}>
      <p className="delete-film__description">
        Are you sure you want to delete this movie?
      </p>

      <Button
        title="Confirm"
        onClick={onDelete}
        className="delete-film__confirm"
      />
    </ModalWindow>
  </section>
);

DeleteFilm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteFilm;
