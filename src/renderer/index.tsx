import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createAppStore } from './store';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import Shell from './Shell';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ipcRenderer } from 'electron';
import { createIpcLink } from 'graphql-transport-electron';
import { ApolloProvider } from '@apollo/react-hooks';
import { actions } from '@renderer/store';

import './global.scss';

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
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
});

const link = createIpcLink({ ipc: ipcRenderer });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const store = createAppStore();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Shell />
      </ApolloProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app'),
);
