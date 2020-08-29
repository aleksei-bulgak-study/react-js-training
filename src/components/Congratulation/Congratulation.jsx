import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';

import icon from '../../../public/images/check-circle-regular.svg';
import './styles.css';

const Logo = <img src={icon} className="congratulation__icon" alt="success image logo"/>;

const Congratulation = ({ onClose }) => (
  <div className="congratulation">
    <ModalWindow title="Congratulations!" className="centered" onClose={onClose} Logo={Logo}>
      <p className="congratulation__text">The movie has been added to database successfully</p>
    </ModalWindow>
  </div>
);

Congratulation.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Congratulation;
