import * as fromActions from './actions';
import produce from 'immer';

export interface Override {
  hotkey?: string;
  unhotKey?: string;
}

export const initialState = {} as Record<string, Override>;
export type State = typeof initialState;

export const reducer = produce((draft: State, action: fromActions.Actions) => {
  switch (action.type) {
    case fromActions.OVERRIDE_HOTKEY: {
      const { abilityId, hotkey } = action.payload;
      if (!draft[abilityId]) {
        draft[abilityId] = {};
      }
      draft[abilityId].hotkey = hotkey.toUpperCase();
      break;
    }

    case fromActions.OVERRIDE_UNHOTKEY: {
      const { abilityId, unhotkey } = action.payload;
      if (!draft[abilityId]) {
        draft[abilityId] = {};
      }
      draft[abilityId].unhotKey = unhotkey.toUpperCase();
      break;
    }
    case fromActions.IMPORT_HOTKEYS_SUCCESS: {
      const { overrides: hotkeyOverrides } = action.payload;

      for (const abilityId in draft) {
        delete draft[abilityId];
      }

      for (const hotkeyOverride of hotkeyOverrides) {
        const abilityId = hotkeyOverride.ability_id;
        if (!draft[abilityId]) {
          draft[abilityId] = {};
        }

        for (const override of hotkeyOverride.overrides) {
          const key = override[0];
          const value = override[1];
          if (key === 'Hotkey') {
            draft[abilityId].hotkey = value.toUpperCase();
          }
          if (key === 'Unhotkey') {
            draft[abilityId].unhotKey = value.toUpperCase();
          }
        }
      }
      break;
    }
  }
}, initialState);
