import Action from '@renderer/store/rootReducer/Action';
import { WarcraftUnit } from 'warcraft3-unit-data';

export const SET_UNITS = 'SET_UNITS';
export interface SetUnitsAction extends Action {
  payload: {
    units: WarcraftUnit[],
  };
}

export function setUnits(units: WarcraftUnit[]): SetUnitsAction {
  return ({
    type: SET_UNITS,
    payload: {
      units,
    },
  });
}
