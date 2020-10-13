import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import Filter from './Filter';
import SearchResults from './SearchResults';
import './Main.css';

const buildClassName = (active) => (active ? '' : 'blured');

const Main = ({ active }) => {
  const className = useMemo(() => buildClassName(active), [active]);
  return (
    <main className={className}>
      <ErrorBoundary>
        <Wrapper>
          <Filter />
          <SearchResults />
        </Wrapper>
      </ErrorBoundary>
    </main>
  );
};

Main.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Main;
