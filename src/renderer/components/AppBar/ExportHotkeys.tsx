import * as React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { default as gql } from 'graphql-tag';
import { QuerySchema } from '@renderer/api';
import { remote } from 'electron';
import { default as getPath } from 'platform-folders';

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
    });
    const { items } = data.listHotkeys!;
    console.log(items);
    console.log(getPath('documents'));
    dialog.showSaveDialog({
      defaultPath: `${getPath('documents')}/Warcraft III/CustomKeyBindings/CustomKeys.txt`,
      filters: [{ name: 'Text Document', extensions: ['txt'] }],
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
