import { commonActions } from '../actions';

const initialState = {
  loader: false,
  modalWindow: null,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonActions.types.LOADER: {
      return { ...state, loader: action.payload };
    }
    case commonActions.types.ERROR: {
      return { ...state, loader: false, error: action.payload };
    }
    case commonActions.types.MODAL_WINDOW: {
      return { ...state, modalWindow: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default commonReducer;
