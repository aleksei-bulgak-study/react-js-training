import { FILTER_GENRE, FILTER_ORDER, FILTER_QUERY } from './filterActionType';

export const filterByGenre = (payload) => ({
  type: FILTER_GENRE,
  payload,
});

export const filterByQuery = (payload) => ({
  type: FILTER_QUERY,
  payload,
});

export const changeOrder = (payload) => ({
  type: FILTER_ORDER,
  payload,
});
