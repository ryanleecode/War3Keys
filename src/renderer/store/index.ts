import { rootReducer, actions, rootEpic } from './rootReducer';
import { Middleware, StoreEnhancer, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export function createAppStore() {
  const epicMiddleware = createEpicMiddleware<any, any, any, any>();

  const middleware: Middleware[] = [epicMiddleware];
  const enhancers: StoreEnhancer[] = [];

  const composedEnhancers = composeWithDevTools(
    ...[applyMiddleware(...middleware), ...enhancers],
  );
  const store = createStore(rootReducer, {}, composedEnhancers);

  const epic$ = new BehaviorSubject(rootEpic);
  const hotReloadingEpic = (...args) =>
    epic$.pipe(switchMap((epic) => epic(args[0], args[1], args[2])));

  epicMiddleware.run(hotReloadingEpic);

  if (
    process.env.NODE_ENV &&
    process.env.NODE_ENV !== 'production' &&
    module.hot
  ) {
    module.hot.accept('./rootReducer', async () => {
      const nextModule = await import('./rootReducer');
      store.replaceReducer(nextModule.rootReducer);
      epic$.next(nextModule.rootEpic);
    });
  }

  return store;
}

export { actions };
export * from './selectors';
