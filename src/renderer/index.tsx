import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store, { history } from './store';
import { default as Amplify, Auth } from 'aws-amplify';
import { default as AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync/lib';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { default as appSyncConfig } from './AppSync';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'connected-react-router';
import Rehydrated from './Rehydrated';
import awsExports from './aws-exports';
import { HotkeyGraphQLProvider } from './components/context';
import Shell from './Shell';

// Importing this using import statements will break TypeScript
// tslint:disable-next-line:variable-name
const Flexbox = require('flexbox-react').default;

import './global.scss';

Amplify.configure(awsExports);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
      light: '#4f5b62',
      dark: '#000a12',
    },
    secondary: {
      main: '#eceff1',
      light: '#ffffff',
      dark: '#babdbe',
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
          <HotkeyGraphQLProvider>
            <ConnectedRouter history={history}>
              <Flexbox flexDirection="column" minHeight="100vh" alignItems="stretch" >
                <Flexbox flexGrow={1}>
                  <Shell />
                </Flexbox>
              </Flexbox>
            </ConnectedRouter>
          </HotkeyGraphQLProvider>
        </Provider>
      </Rehydrated>
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById('app'),
);
