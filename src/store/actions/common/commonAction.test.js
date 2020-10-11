import { loader, error, openModalWindow, closeModalWindow } from './commonAction';
import { ERROR, LOADER, MODAL_WINDOW } from './commonActionType';

describe('commonAction', () => {
  test('when loader action creator is called then action created', () => {
    const action = loader(true);
    expect(action.type).toEqual(LOADER);
    expect(action.payload).toBeTruthy();
  });

  test('when error action creator is called then action created', () => {
    const action = error({ message: 'test error' });
    expect(action.type).toEqual(ERROR);
    expect(action.payload).toEqual('test error');
  });

  test('when openModalWindow action creator is called then action created', () => {
    const action = openModalWindow('modalWindowType');
    expect(action.type).toEqual(MODAL_WINDOW);
    expect(action.payload).toEqual('modalWindowType');
  });

  test('when closeModalWindow action creator is called then action created', () => {
    const action = closeModalWindow();
    expect(action.type).toEqual(MODAL_WINDOW);
  });
});
