import React from 'react';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import './styles.css';

export default () => (
  <footer>
    <ErrorBoundary>
      <Wrapper>
        <p className="app-title">
          <span className="app-title__name">netflix</span>
          roulette
        </p>
      </Wrapper>
    </ErrorBoundary>
  </footer>
);
