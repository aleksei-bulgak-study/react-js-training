import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import commonReducer from './commonReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  films: filmReducer,
  common: commonReducer,
  filters: filterReducer,
});
