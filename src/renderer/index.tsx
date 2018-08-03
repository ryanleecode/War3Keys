import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store, { history } from './store';
import { default as Amplify, Auth } from 'aws-amplify';
import { default as AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync/lib';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { default as appSyncConfig } from './AppSync';
import Router from './Router';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'connected-react-router';
import Rehydrated from './Rehydrated';
import awsExports from './aws-exports';
import AppBar from './components/AppBar';

// Importing this using import statements will break TypeScript
// tslint:disable-next-line:variable-name
const Flexbox = require('flexbox-react').default;

import './global.scss';

Amplify.configure(awsExports);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
    },
    secondary: {
      main: '#4e342e',
      light: '#7b5e57',
      dark: '#260e04',
    },
  },
});

const { graphqlEndpoint, region } = appSyncConfig;
const client = new AWSAppSyncClient({
  region,
  url: graphqlEndpoint,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  disableOffline: true,
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client as any} >
      <Rehydrated>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Flexbox flexDirection="column" minHeight="100vh" alignItems="stretch" >
              <Flexbox element="header">
                <AppBar />
              </Flexbox>
              <Flexbox flexGrow={1}>
                <Router />
              </Flexbox>
              <Flexbox element="footer" />
            </Flexbox>
          </ConnectedRouter>
        </Provider>
      </Rehydrated>
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById('app'),
);
