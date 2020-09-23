import React, { useCallback, useEffect, useMemo } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
} from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home';
import SearchBar from '../SearchBar';
import Preview from '../Preview';
import { filmActions, filterActions } from '../../store/actions';

const HomeContainer = ({ films, filters, common, onFilterFilms }) => {
  const { path } = useRouteMatch();
  const history = useHistory();

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

  const onGoToSearch = useCallback(
    (searchString) => history.push(`/search?query=${searchString}`),
    [history],
  );

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
        {buildHome(<Preview onGoToSearch={onGoToSearch} />)}
      </Route>
      <Route exact path={[path, `${path}search`]}>
        {buildHome(<SearchBar />)}
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
