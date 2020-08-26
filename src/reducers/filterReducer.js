import {
  FILTER_GENRE,
  FILTER_ORDER,
  FILTER_QUERY,
} from '../actions/filter/filterActionType';

const initialState = {
  genre: null,
  order: 'release_date',
  searchString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_GENRE: {
      return { ...state, genre: action.payload };
    }
    case FILTER_ORDER: {
      return { ...state, order: action.payload };
    }
    case FILTER_QUERY: {
      return { ...state, searchString: action.payload };
    }
    default:
      return state;
  }
};
