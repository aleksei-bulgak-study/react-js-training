import React from 'react';
import PropTypes from 'prop-types';
import GenreFilter from './GenreFilter';
import Sorting from './Sorting';

import './styles.css';

const FILTERS = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const SORTING = ['Release date', 'Runtime', 'budget', 'revenue', 'vote average'];

const Filter = ({ filterByGenreAction, sortingAction }) => (
  <section className="filter__list">
    <div className="filter__item filter__by-genre">
      <GenreFilter genres={FILTERS} action={filterByGenreAction} />
    </div>
    <div className="filter__item filter__by-date">
      <Sorting title="Sort by" options={SORTING} onAction={sortingAction} />
    </div>
  </section>
);

Filter.propTypes = {
  filterByGenreAction: PropTypes.func.isRequired,
  sortingAction: PropTypes.func.isRequired,
};

export default Filter;
