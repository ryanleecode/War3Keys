import { combineReducers } from 'redux';
import { unitReducer, unitActions } from './units';

const rootReducer = combineReducers({ unitReducer });

const actions = {
  unitActions,
};

export { actions };
export default rootReducer;
