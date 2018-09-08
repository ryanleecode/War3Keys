
export default interface Action {
  type: string;
  payload: any;
  error?: boolean;
}
