import rootReducer from './rootReducer';

type FirstArgument<T> = T extends (
  arg1: infer U, ...args: any[]) => any ? U : any;

type RootState = Exclude<FirstArgument<typeof rootReducer>, undefined>;

export default RootState;
