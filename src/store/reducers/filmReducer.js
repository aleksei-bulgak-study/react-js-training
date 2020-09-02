import { filmActions } from '../actions';

const initialState = {
  films: [],
  filteredResults: [],
  preview: null,
  filmForProcessing: null,
  offset: 0,
};

const filmResucer = (state = initialState, action) => {
  switch (action.type) {
    case filmActions.types.FETCH_FILM_LIST_SUCCESS: {
      const { films, total } = action.payload;
      const newFilmList = [...state.films, ...films];
      const offset = state.offset + films.length;
      return { ...state, films: newFilmList, total, offset };
    }
    case filmActions.types.SET_FILTERED_RESULTS: {
      return { ...state, filteredResults: action.payload };
    }
    case filmActions.types.PREVIEW_FILM: {
      return { ...state, preview: action.payload };
    }
    case filmActions.types.FILM_FOR_PROCESSING: {
      return { ...state, filmForProcessing: action.payload };
    }
    case filmActions.types.DELETE_FILM: {
      const result = state.films.filter((film) => film.id !== action.payload);
      return { ...state, films: result, offset: state.offset - 1 };
    }
    default: {
      return state;
    }
  }
};

export default filmResucer;
