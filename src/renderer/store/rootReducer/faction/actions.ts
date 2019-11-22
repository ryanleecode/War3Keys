import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import { Faction } from '@renderer/generated/generated';

export const SET_FACTION = 'SET_FACTION';

export const Actions = {
  setFaction: (payload: { faction: Faction }) =>
    createAction(SET_FACTION, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
