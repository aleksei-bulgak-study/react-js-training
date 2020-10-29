import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import BrandHeader from '../Brand';
import './Header.css';

const Header = () => (
  <header>
    <ErrorBoundary>
      <BrandHeader />
    </ErrorBoundary>
  </header>
);

export default Header;
