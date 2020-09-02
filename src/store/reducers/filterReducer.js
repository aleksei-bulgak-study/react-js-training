import { filterActions } from '../actions';

const initialState = {
  genre: null,
  order: 'release_date',
  searchString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case filterActions.types.FILTER_GENRE: {
      return { ...state, genre: action.payload };
    }
    case filterActions.types.FILTER_ORDER: {
      return { ...state, order: action.payload };
    }
    case filterActions.types.FILTER_QUERY: {
      return { ...state, searchString: action.payload };
    }
    default:
      return state;
  }
};
