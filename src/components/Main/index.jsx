import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import Filter from './Filter';
import SearchResults from './SearchResults';
import './styles.css';

const Main = (props) => (
  <main>
    <ErrorBoundary>
      <Wrapper>
        <Filter />
        <SearchResults {...props} />
      </Wrapper>
    </ErrorBoundary>
  </main>
);

export default Main;
