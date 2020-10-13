import {
  ERROR,
  LOADER,
  MODAL_WINDOW,
} from '../actions/common/commonActionType';
import commonReducer from './commonReducer';

describe('when commonReducer', () => {
  describe('receives LOADER event', () => {
    test('true then loaded property stayes the same', () => {
      const initialState = { loader: true };
      const action = { type: LOADER, payload: true };
      const result = commonReducer(initialState, action);

      expect(result.loader).toBeTruthy();
    });

    test('false then loaded property will be changed', () => {
      const initialState = { loader: true };
      const action = { type: LOADER, payload: false };
      const result = commonReducer(initialState, action);

      expect(result.loader).toBeFalsy();
    });
  });

  describe('receives ERROR event', () => {
    test('then loader is set to false and error message is populated', () => {
      const initialState = { loader: true };
      const action = { type: ERROR, payload: 'Test message' };
      const result = commonReducer(initialState, action);

      expect(result.loader).toBeFalsy();
      expect(result.error).toEqual('Test message');
    });
  });

  describe('receives MODAL_WINDOW event ', () => {
    test('then modal window property is populated', () => {
      const initialState = { loader: true };
      const action = { type: MODAL_WINDOW, payload: true };
      const result = commonReducer(initialState, action);

      expect(result.loader).toBeTruthy();
      expect(result.modalWindow).toBeTruthy();
    });
  });

  describe('receives unknown action type', () => {
    test('then initial state returned', () => {
      const initialState = { loader: true };
      const action = { type: "INVLID", payload: true };
      const result = commonReducer(initialState, action);
      expect(result.loader).toBeTruthy();
      expect(Object.keys(result).length).toEqual(1);
    });
  });
});
