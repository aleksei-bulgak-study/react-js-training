import React from 'react';
import Button from '../Button';

import './styles.css';

const LinkButton = ({title, onClick}) => {
  return <Button title={title} onClick={onClick} className='link'/>;
};

export default LinkButton;
