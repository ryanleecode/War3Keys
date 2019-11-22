import { combineReducers } from 'redux';
import { factionReducer, factionActions } from './faction';
import { overridesReducer, overridesActions, overridesEpic } from './overrides';
import { combineEpics } from 'redux-observable';

export const rootReducer = combineReducers({
  faction: factionReducer,
  overrides: overridesReducer,
});

export const rootEpic = combineEpics(overridesEpic);

export const actions = {
  factionActions,
  overridesActions,
};
