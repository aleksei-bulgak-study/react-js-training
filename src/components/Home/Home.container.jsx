import React, { useEffect, useMemo } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'qs';
import Home from './Home';
import SearchBar from '../SearchBar';
import Preview from '../Preview';
import { filmActions, filterActions } from '../../store/actions';

const HomeContainer = ({ films, filters, common, onFilterFilms, onSearchString, location }) => {
  const { path } = useRouteMatch();

  const searchStringValue = useMemo(() => {
    if (filters.searchString) {
      return filters.searchString;
    }
    if (location.search) {
      const searchQuery = qs.parse(location.search, { ignoreQueryPrefix: true }).query;
      onSearchString(searchQuery);
      return searchQuery;
    }
    return '';
  }, [filters.searchString, location]);

  useEffect(() => {
    const { searchString, order, genre } = filters;
    const pattern = new RegExp(searchString, 'gi');
    const filteredResults = films
      .filter(
        (film) =>
          genre === null ||
          genre.toLowerCase() === 'all' ||
          film.genres.indexOf(genre) !== -1,
      )
      .filter((film) => pattern.test(film.title))
      .sort((f, s) => {
        if (f[order] > s[order]) {
          return 1;
        }
        return -1;
      });
    onFilterFilms(filteredResults);
  }, [films, filters, onFilterFilms]);

  const isModalWindoOpened = useMemo(() => common.modalWindow !== null, [
    common.modalWindow,
  ]);

  const buildHome = (TopSection) => (
    <Home
      isModalWindoOpened={isModalWindoOpened}
      loader={common.loader}
      modalWindowType={common.modalWindow}
      TopSectionContent={TopSection}
    />
  );

  return (
    <Switch>
      <Route exact path={`${path}films/:id`}>
        {buildHome(<Preview />)}
      </Route>
      <Route exact path={[path, `${path}search`]}>
        {buildHome(<SearchBar searchString={searchStringValue} />)}
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
};

HomeContainer.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      release_date: PropTypes.string,
      url: PropTypes.string,
      genre: PropTypes.arrayOf(PropTypes.string),
      overview: PropTypes.string,
      runtime: PropTypes.number,
    }),
  ).isRequired,
  filters: PropTypes.shape({
    searchString: PropTypes.string,
    order: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    loader: PropTypes.bool,
  }).isRequired,
  onFilterFilms: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  onSearchString: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterFilms: (films) => dispatch(filmActions.filteredFilms(films)),
  onSearchString: (query) => {
    dispatch(filterActions.filterByQuery(query));
    dispatch(filmActions.renewedFilmsSearch());
  },
});

const mapStateToProps = (state) => ({
  films: state.films.films,
  filters: state.filters,
  common: state.common,
  filmForProcessing: state.films.filmForProcessing,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
