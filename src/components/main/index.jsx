import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper';
import Filter from './filter';
import SearchResults from './search-results';
import './styles.css';

const Main = ({ searchResults }) => (
  <main>
    <Wrapper>
      <Filter />
      <SearchResults searchResults={searchResults} />
    </Wrapper>
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
