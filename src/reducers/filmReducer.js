import {
  SET_FILTERED_RESULTS,
  FETCH_FILM_LIST_SUCCESS,
  PREVIEW_FILM,
  FILM_FOR_PROCESSING,
  DELETE_FILM,
} from '../actions/film/filmActionType';

const initialState = {
  films: [],
  filteredResults: [],
  preview: null,
  filmForProcessing: null,
};

const filmResucer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_LIST_SUCCESS: {
      const { films, total, page } = action.payload;
      return { ...state, films, total, page };
    }
    case SET_FILTERED_RESULTS: {
      return { ...state, filteredResults: action.payload };
    }
    case PREVIEW_FILM: {
      return { ...state, preview: action.payload };
    }
    case FILM_FOR_PROCESSING: {
      return { ...state, filmForProcessing: action.payload };
    }
    case DELETE_FILM: {
      const result = state.films.filter((film) => film.id !== action.payload);
      return { ...state, films: result };
    }
    default: {
      return state;
    }
  }
};

export default filmResucer;
