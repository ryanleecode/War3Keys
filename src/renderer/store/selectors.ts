import RootState from './RootState';

export const factionSelector = (state: RootState) => state.faction;

export const overridesSelector = (state: RootState) => state.overrides;
