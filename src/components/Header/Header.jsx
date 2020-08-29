import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import BrandHeader from '../Brand';
import './styles.css';

const Header = () => (
  <header>
    <ErrorBoundary>
      <BrandHeader />
    </ErrorBoundary>
  </header>
);

export default Header;
