import { WarcraftUnit } from 'warcraft3-unit-data';
import { default as produce } from 'immer';
import { SET_UNITS, SetUnitsAction } from './actions';

export const units = (state: WarcraftUnit[] = [], action: SetUnitsAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_UNITS:
        const { units } = action.payload;
        draft.length = 0;
        draft.push(...units);
        return;
      default:
        return;
    }
  });
};
