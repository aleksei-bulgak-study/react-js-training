import React, { Component } from 'react';
import './styles.css';

class DeleteFilm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { closeAction, deleteAction } = this.props;
    return (
      <section className="delete-film">
        <div className="modal-window__overlay" />
        <div className="modal-window">
          <div className="modal-window__wrapper">
            <h1 className="modal-window__title">Delete movie</h1>
            <p className="modal-window__description">
              Are you sure you want to delete this movie?
            </p>
            <button
              type="button"
              className="button modal-window__confirm"
              onClick={deleteAction}
            >
              Confirm
            </button>
            <button
              type="button"
              className="modal-window__close"
              onClick={closeAction}
            >
              Close
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default DeleteFilm;
