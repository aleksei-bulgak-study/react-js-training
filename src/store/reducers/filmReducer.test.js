import filmReducer from './filmReducer';
import { filmActions } from '../actions';

describe('filmReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      films: [
        {
          id: 123,
        },
      ],
      offset: 1,
    };
  });

  test('when ADD_FILMS_INTO_LIST triggered then new films added into list', () => {
    const newFilmPayload = {
      films: [{ id: 456 }],
      total: 111,
    };
    const newState = filmReducer(initialState, {
      type: filmActions.types.ADD_FILMS_INTO_LIST,
      payload: newFilmPayload,
    });

    expect(newState.total).toEqual(111);
    expect(newState.offset).toEqual(2);
    expect(newState.films).toEqual([{ id: 123 }, { id: 456 }]);
    expect(newState.films.length).toEqual(2);
  });

  test('when SET_FILTERED_RESULTS triggered then filteredResults populated', () => {
    const newState = filmReducer(initialState, {
      type: filmActions.types.SET_FILTERED_RESULTS,
      payload: [{ id: 456 }],
    });
    expect(newState.filteredResults).toEqual([{ id: 456 }]);
  });

  test('when PREVIEW_FILM triggered then preview populated', () => {
    const newState = filmReducer(initialState, {
      type: filmActions.types.PREVIEW_FILM,
      payload: { id: 456 },
    });
    expect(newState.preview).toEqual({ id: 456 });
  });

  test('when FILM_FOR_PROCESSING triggered then filmForProcessing populated', () => {
    const newState = filmReducer(initialState, {
      type: filmActions.types.FILM_FOR_PROCESSING,
      payload: { id: 456 },
    });
    expect(newState.filmForProcessing).toEqual({ id: 456 });
  });

  test('when DELETE_FILM triggered then films list updated', () => {
    initialState.films.push({ id: 4567 });
    initialState.offset = 2;
    const newState = filmReducer(initialState, {
      type: filmActions.types.DELETE_FILM,
      payload: 4567,
    });
    expect(newState.films.length).toEqual(1);
    expect(newState.films).toEqual([{ id: 123 }]);
    expect(newState.offset).toEqual(1);
  });

  test('when DELETE_FILM triggered when id is invalid then films not changed', () => {
    initialState.films.push({ id: 4567 });
    initialState.offset = 2;
    const newState = filmReducer(initialState, {
      type: filmActions.types.DELETE_FILM,
      payload: 987,
    });
    expect(newState.films.length).toEqual(2);
    expect(newState.films).toEqual([{ id: 123 }, { id: 4567 }]);
    expect(newState.offset).toEqual(2);
  });

  test('when UPDATE_GENRES triggered then genres from films are joined', () => {
    initialState.films.push({ id: 4567, genres: ['Comedy', 'Drama'] });
    initialState.films[0].genres = ['Action', 'Drama'];

    const newState = filmReducer(initialState, {
      type: filmActions.types.UPDATE_GENRES,
    });

    expect(newState.genres).toEqual(['All', 'Action', 'Drama', 'Comedy']);
  });

  test('when EDIT_FILM_SUCCESS triggered and existing film updated', () => {
    initialState.films.push({ id: 4567, genres: ['Comedy', 'Drama'] });

    const newState = filmReducer(initialState, {
      type: filmActions.types.EDIT_FILM_SUCCESS,
      payload: {
        id: 4567,
        genres: ['TEST'],
      },
    });

    expect(newState.films.length).toEqual(2);
    expect(newState.films).toEqual([
      { id: 123 },
      { id: 4567, genres: ['TEST'] },
    ]);
  });

  test('when EDIT_FILM_SUCCESS triggered and new film passed then nothing changed', () => {
    initialState.films.push({ id: 4567, genres: ['Comedy', 'Drama'] });

    const newState = filmReducer(initialState, {
      type: filmActions.types.EDIT_FILM_SUCCESS,
      payload: {
        id: 897,
        genres: ['TEST'],
      },
    });

    expect(newState.films.length).toEqual(2);
    expect(newState.films).toEqual([
      { id: 123 },
      { id: 4567, genres: ['Comedy', 'Drama'] },
    ]);
  });

  test('when ADD_FILM_SUCCESS triggered then new film added to list', () => {
    const newFilm = { id: 4678 };
    const newState = filmReducer(initialState, {
      type: filmActions.types.ADD_FILM_SUCCESS,
      payload: newFilm,
    });
    expect(newState.films.length).toEqual(2);
    expect(newState.films).toEqual([{ id: 123 }, { id: 4678 }]);
  });

  test('when RESET_FILM_RESULTS triggered then films list cleared', () => {
    const newState = filmReducer(initialState, {
      type: filmActions.types.RESET_FILM_RESULTS,
    });

    expect(newState.films).toEqual([]);
    expect(newState.offset).toEqual(0);
  });

  test('when invalid type specified then nothing changed', () => {
    const newState = filmReducer(initialState, {
      type: 'INVALID',
    });

    expect(newState).toEqual(initialState);
  });
});
