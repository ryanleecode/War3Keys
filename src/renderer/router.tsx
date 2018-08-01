import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import AppBar from './components/AppBar';

export default class Router extends React.Component {
  public render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route component={() => <h1>204 No Content</h1>} />;
        </Switch>
      </div>
    );
  }
}
