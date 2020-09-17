import { filmActions } from '../actions';

const initialState = {
  films: [],
  filteredResults: [],
  preview: null,
  filmForProcessing: null,
  offset: 0,
  genres: ['All'],
};

const filmResucer = (state = initialState, action) => {
  switch (action.type) {
    case filmActions.types.ADD_FILMS_INTO_LIST: {
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
    case filmActions.types.UPDATE_GENRES: {
      const newGenres = new Set(state.films.map((film) => film.genres).flat());
      return { ...state, genres: ['All', ...newGenres] };
    }
    case filmActions.types.EDIT_FILM_SUCCESS: {
      const updatedFilm = action.payload;
      const films = state.films.filter((film) => film.id !== updatedFilm.id);
      return { ...state, films: [...films, updatedFilm] };
    }
    case filmActions.types.ADD_FILM_SUCCESS: {
      const newFilm = action.payload;
      return { ...state, films: [...state.films, newFilm] };
    }
    case filmActions.types.RESET_FILM_RESULTS: {
      return { ...state, films: [], offset: 0 };
    }
    default: {
      return state;
    }
  }
};

export default filmResucer;
