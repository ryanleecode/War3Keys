import * as fromActions from './actions';
import { Faction } from '@renderer/generated/generated';

export const initialState = Faction.Human as Faction;
export type State = typeof initialState;

export const reducer = (
  state = initialState,
  action: fromActions.Actions,
): State => {
  switch (action.type) {
    case fromActions.SET_FACTION: {
      return action.payload.faction;
    }
    default:
      return state;
  }
};
