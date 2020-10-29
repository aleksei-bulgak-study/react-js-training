import filmActions from '../film';
import { FILTER_GENRE, FILTER_ORDER, FILTER_QUERY } from './filterActionType';

export const filterByGenreAction = (payload) => ({
  type: FILTER_GENRE,
  payload,
});

export const filterByGenre = (payload) => (dispatch) => {
  dispatch(filterByGenreAction(payload));
  return dispatch(filmActions.updateFilteredFilms());
};

export const filterByQueryAction = (payload) => ({
  type: FILTER_QUERY,
  payload,
});

export const filterByQuery = (payload) => (dispatch) => {
  dispatch(filterByQueryAction(payload));
  return dispatch(filmActions.updateFilteredFilms());
};

const changeOrderAction = (payload) => ({
  type: FILTER_ORDER,
  payload,
});

export const changeOrder = (payload) => (dispatch) => {
  dispatch(changeOrderAction(payload));
  return dispatch(filmActions.updateFilteredFilms());
};
