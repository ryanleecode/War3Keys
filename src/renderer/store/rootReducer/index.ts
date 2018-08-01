import { combineReducers } from 'redux';

const rootReducer = combineReducers({ trash });

function trash(state = {}, action) {
  return state;
}

export default rootReducer;
