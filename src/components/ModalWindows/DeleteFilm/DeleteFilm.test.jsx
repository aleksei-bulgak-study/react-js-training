import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DeleteFilm from './DeleteFilm';
import { filmActions } from '../../../store/actions';

filmActions.deleteFilm = jest.fn();

describe('DeleteFilm', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('when confirm button pressed then onDelete is triggered', () => {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();

    const deleteFilm = mount(
      <Provider store={store}>
        <DeleteFilm />
      </Provider>,
    );

    deleteFilm.find('button.delete-film__confirm').simulate('click');

    expect(store.dispatch).toHaveBeenCalled();
    expect(filmActions.deleteFilm).toHaveBeenCalled();
  });
});
