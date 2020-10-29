import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BaseModalWindow from '../BaseModalWindow';
import './DeleteFilm.css';
import Button from '../../Common/Button';
import { commonActions, filmActions } from '../../../store/actions';

const DeleteFilm = ({ onClose, onDelete }) => (
  <section className="delete-film">
    <BaseModalWindow title="Delete movie" onClose={onClose}>
      <p className="delete-film__description">
        Are you sure you want to delete this movie?
      </p>

      <Button
        title="Confirm"
        onClick={onDelete}
        className="delete-film__confirm"
      />
    </BaseModalWindow>
  </section>
);

DeleteFilm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  onClose: () => dispatch(commonActions.closeModalWindow()),
  onDelete: () => dispatch(filmActions.deleteFilm()),
});

export default connect(null, mapDispathToProps)(DeleteFilm);
