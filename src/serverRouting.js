import renderHtml from './serverRenderer';
import createStore from './store';
import { filmActions, filterActions } from './store/actions';

const renderPreview = (url, filmId) => {
  const store = createStore({});
  return Promise.resolve(
    store.dispatch(filmActions.getFilmById(filmId)),
  ).then(() => renderHtml(store, url));
};

const renderSearch = (url, query) => {
  const store = createStore({});
  return Promise.resolve(store.dispatch(filterActions.filterByQuery(query)))
    .then(() => store.dispatch(filmActions.loadFilms()))
    .then(() => renderHtml(store, url));
};

const renderHome = (url) => {
  const store = createStore({});
  return renderHtml(store, url);
};

export default { renderHome, renderSearch, renderPreview };
