import { Store } from 'redux';

export default interface StoreFactory {
  create(): Store<any>;
}
