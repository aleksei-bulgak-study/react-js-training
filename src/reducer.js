import { combineReducers } from 'redux';
import { filmReducer, commonReducer, filterReducer } from './reducers'

export default combineReducers({
  films: filmReducer,
  common: commonReducer,
  filters: filterReducer,
});
