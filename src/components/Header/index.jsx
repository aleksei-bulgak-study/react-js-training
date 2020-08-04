import React from 'react';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import BrandHeader from './Brand';
import './styles.css';

const Header = () => (
  <header>
    <ErrorBoundary>
      <Wrapper>
        <BrandHeader />
      </Wrapper>
    </ErrorBoundary>
  </header>
);

export default Header;
