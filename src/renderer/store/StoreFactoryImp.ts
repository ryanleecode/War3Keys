import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Middleware, Store, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import StoreFactory from './StoreFactory';

export default class StoreFactoryImp implements StoreFactory {
  private history: History;

  protected middleware: Middleware[];

  protected enhancers: StoreEnhancer[];

  constructor(history: History) {
    this.middleware = [];
    this.enhancers = [];
    this.history = history;
  }

  public create(): Store {
    const composedEnhancers = composeWithDevTools(...this.getEnhancers());

    const store = createStore(
      connectRouter(this.history)(rootReducer),
      {},
      composedEnhancers,
    );

    return store;
  }

  private getEnhancers() {
    const allMiddleware = [...this.middleware, routerMiddleware(this.history)];
    const middlewareEnhancer = applyMiddleware(...allMiddleware);
    return [middlewareEnhancer, ...this.enhancers];
  }
}
