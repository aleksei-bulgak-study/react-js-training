import {
  FETCH_FILM_LIST_SUCCESS,
  SET_FILTERED_RESULTS,
  PREVIEW_FILM,
  FILM_FOR_PROCESSING,
  DELETE_FILM,
} from './filmActionType';
import commonActions from '../common';
import { filmService } from '../../../api';

export const filmsLoaded = (payload) => ({
  type: FETCH_FILM_LIST_SUCCESS,
  payload,
});

export const loadFilms = () => (dispatch, getState) => {
  dispatch(commonActions.loader(true));
  filmService
    .getFilms({
      query: getState().films.query || '',
      offset: getState().films.offset || 0,
      sortBy: getState().filters.order,
      genre: getState().filters.genre || ''
    })
    .then((data) => dispatch(filmsLoaded(data)))
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(dispatch(commonActions.loader(false))));
};

export const filteredFilms = (payload) => ({
  type: SET_FILTERED_RESULTS,
  payload,
});

export const previewFilm = (payload) => ({
  type: PREVIEW_FILM,
  payload,
});

export const closeFilmPreview = () => ({
  type: PREVIEW_FILM,
  payload: null,
});

export const filmForProcessing = (payload) => (dispatch) => {
  dispatch(commonActions.loader(true));
  dispatch({
    type: FILM_FOR_PROCESSING,
    payload: payload.film,
  });
  dispatch(commonActions.openModalWindow(payload.type));
  dispatch(commonActions.loader(false));
};

export const deleteFilmFromStore = (payload) => ({
  type: DELETE_FILM,
  payload,
});

export const deleteFilm = () => (dispatch, getState) => {
  const filmIdForDeletion = getState().films.filmForProcessing.id;
  dispatch(commonActions.loader(true));
  filmService
    .deleteFilm(filmIdForDeletion)
    .then(() => {
      dispatch(deleteFilmFromStore(filmIdForDeletion));
      dispatch(commonActions.closeModalWindow());
    })
    .catch((err) => commonActions.error(err.message))
    .finally(() => dispatch(commonActions.loader(false)));
};
