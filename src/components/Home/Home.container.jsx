import React, { useCallback, useMemo } from 'react';
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
import { filmActions } from '../../store/actions';

const HomeContainer = ({ common }) => {
  const { path } = useRouteMatch();
  const history = useHistory();

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
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    loader: PropTypes.bool,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFilterFilms: (films) => dispatch(filmActions.filteredFilms(films)),
});

const mapStateToProps = (state) => ({
  common: state.common,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
