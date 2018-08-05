import * as React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { default as gql } from 'graphql-tag';
import { QuerySchema } from '@renderer/api';
import * as path from 'path';
import { remote } from 'electron';
import { default as getPath } from 'platform-folders';
import * as jetpack from 'fs-jetpack';

const { dialog } = remote;

const GET_HOTKEYS = gql`
  query {
    listHotkeys {
      items {
        hotkey,
        abilityId
      }
    }
  }
`;

const exportHotkeysDefault: () => Promise<void> = () => new Promise((resolve, reject) => {
  reject(new Error('No implementation provided for exporting hotkeys'));
});
const { Provider, Consumer } = React.createContext(exportHotkeysDefault);

class ExportHotkeysProvider extends React.Component {
  public async getHotkeys(client: ApolloClient<any>) {
    const { data } = await client.query<QuerySchema>({
      query: GET_HOTKEYS,
      fetchPolicy: 'network-only',
    });
    const { items } = data.listHotkeys!;
    const defaultPath = path.join(
      getPath('documents'),
      'Warcraft III',
      'CustomKeyBindings',
      'CustomKeys.txt');
    dialog.showSaveDialog(
      {
        defaultPath,
        filters: [{ name: 'Text Document', extensions: ['txt'] }],
      },
      (fileName) => {
        if (fileName) {
          const customHotkeysAsString = items!.map((hotkeyConnection) => {
            const { abilityId, hotkey } = hotkeyConnection;
            return `[${abilityId}]\nHotkey=${hotkey}\nResearchhotkey=${hotkey}\n`;
          });
          jetpack.write(fileName, customHotkeysAsString.join(''));
        }
      });
  }

  public render() {
    const { children } = this.props;
    return (
      <ApolloConsumer>
        {(client) => {
          return (
            <Provider value={async () => this.getHotkeys(client)}>
              {children}
            </Provider>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export { ExportHotkeysProvider, Consumer as ExportHotkeysConsumer };
