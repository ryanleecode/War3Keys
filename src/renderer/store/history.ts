import { createBrowserHistory, History, createHashHistory } from 'history';

let history: History;
if (process.env.NODE_ENV === 'production') {
  history  = createBrowserHistory();
} else {
  history = createHashHistory();
}

export default history;
