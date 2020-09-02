import { LOADER, ERROR, MODAL_WINDOW } from './commonActionType';

export const loader = (payload) => ({ type: LOADER, payload });

export const error = (err) => ({ type: ERROR, payload: err.message });

export const openModalWindow = (type) => ({
  type: MODAL_WINDOW,
  payload: type,
});

export const closeModalWindow = () => ({
  type: MODAL_WINDOW,
  payload: null,
});
