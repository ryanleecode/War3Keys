import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import { HotkeyOverride } from '@drdgvhbh/wc3-custom-hotkeys-parser';

export const OVERRIDE_HOTKEY = 'OVERRIDE_HOTKEY';
export const OVERRIDE_UNHOTKEY = 'OVERRIDE_UNHOTKEY';
export const IMPORT_HOTKEYS = 'IMPORT_HOTKEYS';
export const IMPORT_HOTKEYS_SUCCESS = 'IMPORT_HOTKEYS_SUCCESS';
export const EXPORT_HOTKEYS_SUCCESS = 'EXPORT_HOTKEYS_SUCCESS';
export const EXPORT_HOTKEYS = 'EXPORT_HOTKEYS';

export const Actions = {
  overrideHotkey: (payload: { abilityId: string; hotkey: string }) =>
    createAction(OVERRIDE_HOTKEY, payload),
  overrideUnhotkey: (payload: { abilityId: string; unhotkey: string }) =>
    createAction(OVERRIDE_UNHOTKEY, payload),
  importHotkeys: (payload: { filePath: string }) =>
    createAction(IMPORT_HOTKEYS, payload),
  importHotkeysSuccess: (payload: { overrides: HotkeyOverride[] }) =>
    createAction(IMPORT_HOTKEYS_SUCCESS, payload),
  exportHotkeys: (payload: { filePath: string }) =>
    createAction(EXPORT_HOTKEYS, payload),
  exportHotkeysSuccess: () => createAction(EXPORT_HOTKEYS_SUCCESS),
};

export type Actions = ActionsUnion<typeof Actions>;
