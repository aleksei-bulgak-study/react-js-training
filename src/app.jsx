import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/404" component={PageNotFound}>
          <PageNotFound GoBackLink={GoBackLink} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
