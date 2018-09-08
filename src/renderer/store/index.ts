import DevelopmentStoreFactory from './DevelopmentStoreFactory';
import ProductionStoreFactory from './ProductionStoreFactory';
import history from './history';
import RootState from './RootState';
import { actions } from './rootReducer';

const storeFactory = (() => {
  if (process.env.NODE_ENV === 'production') {
    return new ProductionStoreFactory(history);
  }
  return new DevelopmentStoreFactory(history);
})();

const store = storeFactory.create();
export { history, RootState, actions };
export * from './selectors';
export default store;
