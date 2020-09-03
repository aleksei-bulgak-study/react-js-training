import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CloseButton from '../../Common/CloseButton';

const BaseModalWindow = ({ title, onClose, children, className, Logo }) => (
  <>
    <div className="modal-window__overlay" />
    <div className="modal-window">
      <div className={`modal-window__wrapper ${className}`}>
        {Logo}
        <h1 className="modal-window__title">{title}</h1>
        <CloseButton
          onClick={onClose}
          size="large"
          className="modal-window__close"
        />
        {children}
      </div>
    </div>
  </>
);

BaseModalWindow.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  Logo: PropTypes.node,
};

BaseModalWindow.defaultProps = {
  className: '',
  Logo: null,
};

export default BaseModalWindow;
