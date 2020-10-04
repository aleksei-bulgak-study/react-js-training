import {
  ADD_FILMS_INTO_LIST,
  SET_FILTERED_RESULTS,
  PREVIEW_FILM,
  FILM_FOR_PROCESSING,
  DELETE_FILM,
  UPDATE_GENRES,
  EDIT_FILM_SUCCESS,
  ADD_FILM_SUCCESS,
  RESET_FILM_RESULTS,
} from './filmActionType';
import commonActions from '../common';
import { filmService } from '../../../api';

export const setFilmsInStore = (payload) => ({
  type: ADD_FILMS_INTO_LIST,
  payload,
});

export const updateGenres = () => ({
  type: UPDATE_GENRES,
  payload: null,
});

export const loadFilms = () => (dispatch, getState) => {
  dispatch(commonActions.loader(true));
  filmService
    .getFilms({
      query: getState().filters.searchString || '',
      offset: getState().films.offset || 0,
      sortBy: getState().filters.order,
      genre: getState().filters.genre || '',
    })
    .then((data) => dispatch(setFilmsInStore(data)))
    .then(() => dispatch(updateGenres()))
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(commonActions.loader(false)));
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

export const addFilmInStore = (data) => ({
  type: ADD_FILM_SUCCESS,
  payload: data,
});

export const addFilm = (film) => (dispatch) => {
  dispatch(commonActions.loader(true));
  filmService
    .addFilm(film)
    .then((newFilm) => {
      dispatch(addFilmInStore(newFilm));
      dispatch(commonActions.closeModalWindow());
    })
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(commonActions.loader(false)));
};

export const editFilmInStore = (data) => ({
  type: EDIT_FILM_SUCCESS,
  payload: data,
});

export const editFilm = (film) => (dispatch) => {
  dispatch(commonActions.loader(true));
  filmService
    .editFilm(film)
    .then((updatedFilm) => {
      dispatch(editFilmInStore(updatedFilm));
      dispatch(commonActions.closeModalWindow());
    })
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(commonActions.loader(false)));
};

export const resetFilmList = () => ({
  type: RESET_FILM_RESULTS,
  payload: 0,
});

export const renewedFilmsSearch = () => (dispatch) => {
  dispatch(commonActions.loader(true));
  dispatch(resetFilmList());
  dispatch(loadFilms());
};

export const getFilmById = (id) => (dispatch) => {
  dispatch(commonActions.loader(true));
  filmService
    .getFilmById(id)
    .then((data) => dispatch(previewFilm(data)))
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(commonActions.loader(false)));
};
