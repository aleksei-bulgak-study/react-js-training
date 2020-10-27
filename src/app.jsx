import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import store from './store';
import { Home, PageNotFound } from './components';

import './app.css';
import { Button } from './components/Common';
import { types } from './components/Common/Button';

const GoBackLink = (
  <Link to="/">
    <Button
      className="page-not-found__go-home"
      title="go to home page"
      type={types.SECONDARY}
    />
  </Link>
);

const App = ({ Router, location, context }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/404" component={PageNotFound}>
          <PageNotFound GoBackLink={GoBackLink} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
};

App.defaultProps = {
  location: null,
  context: null,
};

export default App;
