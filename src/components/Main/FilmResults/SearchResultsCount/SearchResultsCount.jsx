import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchResultsCount = ({ count }) => (
  <div className="film-results__title">
    <p className="film-results__text">
      <span className="film-results__count">{count}</span>
      movies found
    </p>
  </div>
);

SearchResultsCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default SearchResultsCount;
