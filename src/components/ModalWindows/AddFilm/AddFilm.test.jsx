import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import AddFilm from './AddFilm';
import { commonActions } from '../../../store/actions';

describe('AddFilm', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('when genres prop is not passed then default props only added', () => {
    const initialStore = {
      films: {
        genres: ['Comedy', 'Drama', 'Science fiction'],
      }
    };
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const form = mount(
      <Provider store={store}>
        <AddFilm />
      </Provider>,
    );

    form.find('button.modal-window__close').simulate('click');
    expect(store.dispatch).toHaveBeenCalledWith(commonActions.closeModalWindow());
  });
});
