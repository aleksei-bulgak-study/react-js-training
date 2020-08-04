import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import Filter from './Filter';
import SearchResults from './SearchResults';
import './styles.css';

const Main = ({ searchResults }) => (
  <main>
    <ErrorBoundary>
      <Wrapper>
        <Filter />
        <SearchResults searchResults={searchResults} />
      </Wrapper>
    </ErrorBoundary>
  </main>
);

Main.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Main;
