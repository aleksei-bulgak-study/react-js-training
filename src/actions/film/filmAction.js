import {
  FETCH_FILM_LIST_SUCCESS,
  SET_FILTERED_RESULTS,
  PREVIEW_FILM,
  FILM_FOR_PROCESSING,
  DELETE_FILM,
} from './filmActionType';
import { loader, error, openModalWindow, closeModalWindow } from '../common';
import { filmService } from '../../service';

export const filmsLoaded = (payload) => ({
  type: FETCH_FILM_LIST_SUCCESS,
  payload,
});

export const loadFilms = () => (dispatch, getState) => {
  dispatch(loader(true));
  filmService
    .getFilms({
      query: getState().query || '',
      page: getState().page || 0,
    })
    .then((data) => dispatch(filmsLoaded(data)))
    .catch((err) => dispatch(error(err)))
    .finally(() => dispatch(dispatch(loader(false))));
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
  dispatch(loader(true));
  dispatch({
    type: FILM_FOR_PROCESSING,
    payload: payload.film,
  });
  dispatch(openModalWindow(payload.type));
  dispatch(loader(false));
};

export const deleteFilmFromStore = (payload) => ({
  type: DELETE_FILM,
  payload,
});

export const deleteFilm = () => (dispatch, getState) => {
  const filmIdForDeletion = getState().films.filmForProcessing.id;
  dispatch(loader(true));
  filmService
    .deleteFilm(filmIdForDeletion)
    .then(() => {
      dispatch(deleteFilmFromStore(filmIdForDeletion));
      dispatch(closeModalWindow());
    })
    .catch((err) => error(err.message))
    .finally(() => dispatch(loader(false)));
};
