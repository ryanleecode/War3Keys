import { ofType } from '@martin_hotell/rex-tils';
import {
  ActionsObservable,
  StateObservable,
  combineEpics,
} from 'redux-observable';
import { map, withLatestFrom, flatMap, tap } from 'rxjs/operators';
import * as fromActions from './actions';
import { from, Observable } from 'rxjs';
import fs from 'fs-jetpack';
import { HotkeyOverride } from '@drdgvhbh/wc3-custom-hotkeys-parser';
import RootState from '@renderer/store/RootState';
import { overridesSelector } from '@renderer/store/selectors';

export const importHotkeysEpic = (
  action$: ActionsObservable<fromActions.Actions>,
): Observable<any> =>
  action$.pipe(
    ofType(fromActions.IMPORT_HOTKEYS),
    flatMap(({ payload: { filePath } }) =>
      from(fs.readAsync(filePath)).pipe(
        flatMap((fileContents) =>
          from(
            new Promise<(_: string) => HotkeyOverride[]>((res) => {
              return require.ensure([], async function() {
                const hotkeyParserModule = await import(
                  '@drdgvhbh/wc3-custom-hotkeys-parser'
                );

                res(hotkeyParserModule.parse_custom_hotkeys);
              });
            }),
          ).pipe(
            map((parseCustomHotkeys) => {
              const hotkeyOverrides = parseCustomHotkeys(fileContents || '');
              return fromActions.Actions.importHotkeysSuccess({
                overrides: hotkeyOverrides,
              });
            }),
          ),
        ),
      ),
    ),
  );

export const exportHotkeysEpic = (
  action$: ActionsObservable<fromActions.Actions>,
  state$: StateObservable<RootState>,
) =>
  action$.pipe(
    ofType(fromActions.EXPORT_HOTKEYS),
    withLatestFrom(state$),
    tap(
      ([
        {
          payload: { filePath },
        },
        state,
      ]) => {
        const overrides = overridesSelector(state);
        const ws = fs.createWriteStream(filePath);
        for (const [abilityId, override] of Object.entries(overrides)) {
          ws.write(`[${abilityId}]\n`);
          if (override.hotkey) {
            ws.write(`Hotkey=${override.hotkey}\n`);
            ws.write(`Researchhotkey=${override.hotkey}\n`);
          }
          if (override.unhotKey) {
            ws.write(`Unhotkey=${override.unhotKey}\n`);
          }
          ws.write(`\n`);
        }
      },
    ),
    map(() => fromActions.Actions.exportHotkeysSuccess()),
  );

export default combineEpics(importHotkeysEpic, exportHotkeysEpic);
