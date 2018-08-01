import { Store } from 'redux';
import StoreFactoryImp from './StoreFactoryImp';
import rootReducer from './rootReducer';

declare const module: NodeModule & {
  hot?: {
    accept(...args: any[]): any;
  },
};

export default class DevelopmentStoreFactory extends StoreFactoryImp {
  public create(): Store {
    const store = super.create();

    if (module.hot) {
      module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
    }

    return store;
  }
}
