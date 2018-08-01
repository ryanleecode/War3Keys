import DevelopmentStoreFactory from './DevelopmentStoreFactory';
import ProductionStoreFactory from './ProductionStoreFactory';
import history from './history';

const storeFactory = (() => {
  if (process.env.NODE_ENV === 'production') {
    return new ProductionStoreFactory(history);
  }
  return new DevelopmentStoreFactory(history);
})();

const store = storeFactory.create();

export { history };
export default store;
