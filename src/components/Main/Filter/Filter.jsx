import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GenreFilter from './GenreFilter';
import Sorting from './Sorting';
import { filterActions } from '../../../store/actions';

import './Filter.css';

const SORTING = [
  'Release date',
  'Runtime',
  'budget',
  'revenue',
  'vote average',
];

const Filter = ({ genres, onFilterByGenre, onSorting }) => {
  const onGenreFiltering = useCallback(
    (genre) => {
      if (genre === genres[0]) {
        onFilterByGenre(null);
      } else {
        onFilterByGenre(genre);
      }
    },
    [genres, onFilterByGenre],
  );

  return (
    <section className="filter__list">
      <div className="filter__item filter__by-genre">
        <GenreFilter genres={genres} action={onGenreFiltering} />
      </div>
      <div className="filter__item filter__by-date">
        <Sorting title="Sort by" options={SORTING} onAction={onSorting} />
      </div>
    </section>
  );
};

Filter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genres: state.films.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterByGenre: (genre) => dispatch(filterActions.filterByGenre(genre)),
  onSorting: (order) => dispatch(filterActions.changeOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
