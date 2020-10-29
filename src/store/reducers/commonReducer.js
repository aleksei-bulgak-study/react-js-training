import { LOADER, ERROR, MODAL_WINDOW } from '../actions/common/commonActionType';

const initialState = {
  loader: false,
  modalWindow: null,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER: {
      return { ...state, loader: action.payload };
    }
    case ERROR: {
      return { ...state, loader: false, error: action.payload };
    }
    case MODAL_WINDOW: {
      return { ...state, modalWindow: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default commonReducer;
