import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CloseButton from '../Common/CloseButton';

const ModalWindow = ({ title, closeAction, children }) => (
  <>
    <div className="modal-window__overlay" />
    <div className="modal-window">
      <div className="modal-window__wrapper">
        <h1 className="modal-window__title">{title}</h1>
        <CloseButton
          onClick={closeAction}
          size="large"
          positonStyles="modal-window__close"
        />
        {children}
      </div>
    </div>
  </>
);

ModalWindow.propTypes = {
  title: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ModalWindow;
