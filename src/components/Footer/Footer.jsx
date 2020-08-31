import React from 'react';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import './styles.css';
import Brand from '../Brand';

const Footer = () => (
  <footer>
    <ErrorBoundary>
      <Wrapper>
        <Brand />
      </Wrapper>
    </ErrorBoundary>
  </footer>
);

export default Footer;
