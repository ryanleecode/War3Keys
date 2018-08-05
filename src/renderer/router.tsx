import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@renderer/pages/Home';

const styles = {
  root: {
    flexGrow: 1,
  },
};

export default class Router extends React.Component {
  public render() {
    return (
      <div style={styles.root}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route component={() => <h1>204 No Content</h1>} />;
        </Switch>
      </div>
    );
  }
}
