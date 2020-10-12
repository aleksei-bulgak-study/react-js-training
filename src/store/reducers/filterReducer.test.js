import filterReducer from './filterReducer';
import { filterActions } from '../actions';

describe('filterReducer', () => {
  test('when filtering by genre then genre value populated', () => {
    const selectedGenre = 'Comedy';
    const state = filterReducer(null, {
      type: filterActions.types.FILTER_GENRE,
      payload: selectedGenre,
    });
    expect(state.genre).toEqual(selectedGenre);
  });

  test('when filtering by order then order value populated', () => {
    const orderByValue = 'test';
    const state = filterReducer(null, {
      type: filterActions.types.FILTER_ORDER,
      payload: orderByValue,
    });

    expect(state.order).toEqual(orderByValue);
  });

  test('when filtering text then searchString populated', () => {
    const filterValue = 'test';
    const state = filterReducer(null, {
      type: filterActions.types.FILTER_QUERY,
      payload: filterValue,
    });

    expect(state.searchString).toEqual(filterValue);
  });

  test('when unsupported type specified then nothing changed', () => {
    const oldState = {test: 'test'};
    const state = filterReducer(oldState, {
      type: 'INVALID',
      payload: 'invalidValue',
    });

    expect(state).toEqual(oldState);
  });
});
