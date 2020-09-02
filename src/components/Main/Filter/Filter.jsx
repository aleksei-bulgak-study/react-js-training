import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GenreFilter from './GenreFilter';
import Sorting from './Sorting';
import { filterActions } from '../../../store/actions';

import './styles.css';

const FILTERS = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const SORTING = [
  'Release date',
  'Runtime',
  'budget',
  'revenue',
  'vote average',
];

const Filter = ({ onFilterByGenre, onSorting }) => {
  const onGenreFiltering = useCallback(
    (genre) => {
      if (genre === FILTERS[0]) {
        onFilterByGenre(null);
      } else {
        onFilterByGenre(genre);
      }
    },
    [onFilterByGenre],
  );

  return (
    <section className="filter__list">
      <div className="filter__item filter__by-genre">
        <GenreFilter genres={FILTERS} action={onGenreFiltering} />
      </div>
      <div className="filter__item filter__by-date">
        <Sorting title="Sort by" options={SORTING} onAction={onSorting} />
      </div>
    </section>
  );
};

Filter.propTypes = {
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterByGenre: (genre) => dispatch(filterActions.filterByGenre(genre)),
  onSorting: (order) => dispatch(filterActions.changeOrder(order)),
});

export default connect(null, mapDispatchToProps)(Filter);
